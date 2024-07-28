import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RestaurantCard from "./components/RestaurantCard";
import SearchBar from "./components/SearchBar";
import "./SearchPage.css";
import { restaurant } from "./types";

function createCard(restaurant: restaurant, index: number) {
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
  const [chosenRestaurants, setChosenRestaurants] = useState(Array<restaurant>);

  const handleFilterSelected = (filter: string) => {
    let tempRests = restaurants.filter(
      (restaurant) => restaurant.type === filter
    );
    setChosenRestaurants(tempRests);
  };

  const handleTextChange = (text: string) => {
    let lengthOfTest = text.length;
    console.log(lengthOfTest);
    let tempRests = restaurants.filter((restaurant) =>
      restaurant.name.includes(text)
    );
    setChosenRestaurants(tempRests);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="search-view">
        <SearchBar
          onSelectFilter={handleFilterSelected}
          onTextEntry={handleTextChange}
        ></SearchBar>
        <div className="card-view">
          {chosenRestaurants.map((restaurant, index) => {
            return createCard(restaurant, index);
          })}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default SearchPage;
