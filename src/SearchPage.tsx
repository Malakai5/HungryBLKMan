import { useEffect, useState } from "react";
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

  const handleFilterSelected = async (filters: Array<string>) => {
    let tempRests: Array<restaurant> = restaurants;

    for (let i = 0; i < filters.length; i++) {
      tempRests = tempRests.filter(
        (restaurant) => restaurant.type === filters[i]
      );
    }

    //useState is one step behind(Same problem as text input)
    setChosenRestaurants(tempRests);
  };

  const handleTextChange = (text: string) => {
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
        <button className="add-button"> Add a new restaurant </button>
      </div>
      <Footer></Footer>
    </>
  );
};

export default SearchPage;
