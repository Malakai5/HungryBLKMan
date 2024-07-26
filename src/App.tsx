import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import { useEffect, useState } from "react";
import { location, restaurant } from "./types";

function JSONStringToRestaurant(restaurant: any, location: any) {
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

  return tempRestaurant;
}

const App = () => {
  const [myArray, setMyArray] = useState([]);

  function GetData() {
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

    const getMyData = async () => {
      const response = await fetch(
        "https://y629tb85u6.execute-api.us-east-1.amazonaws.com/dev/search",
        config
      );
      const data = await response.json();
      const restaurants = await data.body.map((r: any) => {
        return JSONStringToRestaurant(JSON.parse(r.restaurant),JSON.parse(r.location));
      });

      setMyArray(restaurants);
    };

    useEffect(() => {
      let helper = async () => {
        await getMyData();
      };
      helper();
    }, []);
  }
  GetData();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="search"
          element={<SearchPage restaurants={myArray} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
