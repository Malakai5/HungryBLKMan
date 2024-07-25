import { restaurant, location } from "../types.ts";
import { useState, useEffect } from "react";

export default function GetData(restaurantList: Array<restaurant>) {
  const [myArray, setMyArray] = useState([]);

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
    const restaurants = data.body.map(
      (r: any) =>
        '{ \n"restaurant": ' +
        r.restaurant +
        ', \n"location": ' +
        r.location +
        "\n }"
    ); // extracting 'name' prop into array of names

    setMyArray(restaurants);
  };

  useEffect(() => {
    let tempList: Array<restaurant> = [];
    getMyData()
      .then(() => {
        myArray.map((value) => {
          let result = JSON.parse(value);
          tempList.push(
            JSONStringToRestaurant(result.restaurant, result.location)
          );
        });
      })
      .then(() => {
        restaurantList = tempList;
      });
  }, []);
}

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
