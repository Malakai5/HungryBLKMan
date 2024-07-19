import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RestaurantCard from "./components/RestaurantCard";
import SearchBar from "./components/SearchBar";
import "./SearchPage.css";
import { location, restaurant } from "./types";

const filters: string[] = ["Ethiopian", "Sit down"];

let originalRestaurantList: Array<restaurant> = [];

function addRestaurant(restaurant: any, location: any) {
  let tempLocation: location = {
    id: location.location_id,
    state: location.state,
    city: location.city,
    zipcode: location.zipcode,
    streetName: location.street_name,
    addressNumber: location.address_number,
    unit_number: location.unit_number,
  };

  let tempRestaurant: restaurant = {
    name: restaurant.restaurant_name,
    id: restaurant.restaurant_id,
    type: restaurant.food_type,
    location: tempLocation,
    priceRange: restaurant.price_range,
    rating: restaurant.rating,
    description: restaurant.description,
    imagePath: restaurant.imagePath,
  };

  originalRestaurantList.push(tempRestaurant);
}

function getAllRestaurants() {
  const raw = JSON.stringify({
    object_type: "restaurant",
    item: {
      restaurant_name: "",
      state: "",
      city: "",
      food_type: "",
      price_range: "5",
      rating: "0",
    },
  });
  const config: RequestInit = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: raw,
    redirect: "follow",
  };
  originalRestaurantList = new Array<restaurant>

  fetch(
    "https://y629tb85u6.execute-api.us-east-1.amazonaws.com/dev/search",
    config
  )
    .then((response) => response.text())
    .then((text) => JSON.parse(text))
    .then((json) => json.body)
    .then((body) => {
      for (let i = 0; i < body.length; i++) {
        let currentJsonObject = body[i];
        let currentRestaurant = JSON.parse(currentJsonObject.restaurant);
        let currentLocation = JSON.parse(currentJsonObject.location);
        addRestaurant(currentRestaurant, currentLocation);
      }
      originalRestaurantList.forEach((restaurant) => console.log(restaurant));
      
    });
}

getAllRestaurants();


function createCard(restaurant: restaurant) {
  let address =
    restaurant.location.addressNumber +
    " " +
    restaurant.location.streetName +
    ", " +
    restaurant.location.state;
  return (
    <RestaurantCard
      description={restaurant.description}
      title={restaurant.name}
      address={address}
      rating={restaurant.rating * 20}
      filters={filters}
    ></RestaurantCard>
  );
}

const SearchPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="search-view">
        <SearchBar></SearchBar>
        <div className="card-view">
          {originalRestaurantList.map((restaurant) => {
            return (
              createCard(restaurant)
            );
          })}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default SearchPage;
