import { useEffect } from "react";
import { restaurant } from "../types";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

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

export default function getData() {
  const [myRestaurants, setRestaurants] = useState([]);
  console.log("hello hahah");

  const getMyData = async () => {
    const response = await fetch(
      "https://y629tb85u6.execute-api.us-east-1.amazonaws.com/dev/search",
      config
    );
    const data = await response.json();
    console.log(data);
    const restaurants = data.results.map(
      (restaurant: restaurant) => restaurant
    ); // extracting 'name' prop into array of names
    console.log("Hello bud");
    setRestaurants(restaurants);
  };
  useEffect(() => {
    getMyData;
  });

  return myRestaurants;
}
