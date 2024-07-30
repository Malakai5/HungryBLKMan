import "./SearchBar.css";
import "../components/Navbar.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import logo from "../assets/HungryLogo.png";
import ButtonSlider from "./MiniComponents/ButtonSlider";
import { useState } from "react";

const genres: string[] = [
  "Korean BBQ",
  "Mexican",
  "Soul Food",
  "American",
  "Italian",
];

interface props {
  onSelectFilter: (filters: Array<string>) => void;
  onTextEntry: (input: string) => void;
}

const SearchBar = ({ onSelectFilter, onTextEntry }: props) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedFilters, setSelectedFilters] = useState(Array<string>);

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
    onTextEntry(inputValue);
  };

  const handleFilterSelected = (filter: string) => {
    let filters: Array<string> = selectedFilters;

    if (filters.includes(filter)) {
      console.log("list includes: " + filter);
      setSelectedFilters(selectedFilters.filter((entry) => entry !== filter));
    } else {
      console.log("adding: " + filter);
      filters.push(filter);
      setSelectedFilters(filters);
    }
    onSelectFilter(selectedFilters);
  };

  return (
    <div className="bar">
      <div className="search-logo">
        <textarea
          placeholder="Search..."
          value={inputValue}
          onChange={(event) => {
            handleInputChange(event);
          }}
        ></textarea>
        <img src={logo} alt="logo" className="icon"></img>
      </div>
      <ul className="filter-list">
        <ButtonSlider
          onSelectFilter={handleFilterSelected}
          items={genres}
        ></ButtonSlider>
      </ul>
      <button className="filter-toggler"> More Search Filters </button>
    </div>
  );
};

export default SearchBar;
