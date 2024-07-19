import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import { location, restaurant } from "./types";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="search" element={<SearchPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
