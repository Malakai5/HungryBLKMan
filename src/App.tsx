import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import { useState } from "react";
import { location, restaurant } from "./types";
import GetData from "./components/RestaurantList";

const App = () => {
  const [restaurantList] = useState(Array<restaurant>);
  GetData(restaurantList);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="search"
          element={<SearchPage restaurants={restaurantList} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
