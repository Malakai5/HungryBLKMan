import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RestaurantCard from "./components/RestaurantCard";
import SearchBar from "./components/SearchBar";
import "./SearchPage.css";
import { location, restaurant } from "./types";


function createCard(restaurant: restaurant, index : number) {
  let address =
    restaurant.location.addressNumber +
    " " +
    restaurant.location.streetName +
    ", " +
    restaurant.location.state;
  let filters = [restaurant.type];
  return (
    <RestaurantCard
    key={index}
      description={restaurant.description}
      title={restaurant.name}
      address={address}
      rating={restaurant.rating * 20}
      filters={filters}
    ></RestaurantCard>
  );
}

interface Props {
  restaurants: Array<restaurant>;
}

const SearchPage = ({ restaurants }: Props) => {
  return (
    <>
      <Navbar></Navbar>
      <div className="search-view">
        <SearchBar></SearchBar>
        <div className="card-view">
          {restaurants.map((restaurant, index) => {
            return createCard(restaurant, index);
          })}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default SearchPage;
