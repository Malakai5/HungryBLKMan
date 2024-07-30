import "./SearchBar.css";
import "../components/Navbar.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import logo from "../assets/HungryLogo.png";
import ButtonSlider from "./MiniComponents/ButtonSlider";
import { useEffect, useState } from "react";

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
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    onTextEntry(inputValue);
  }, [inputValue]);

  const handleFilterSelected = (filter: string) => {
    let tempFilters: Array<string> = [];
    console.log(selectedFilters);

    if (selectedFilters.includes(filter)) {
      console.log("list includes: " + filter);
      tempFilters = selectedFilters.filter((entry) => entry !== filter);
    } else {
      console.log("adding: " + filter);
      for (let i = 0; i < selectedFilters.length; i++) {
        tempFilters.push(selectedFilters[i]);
      }
      tempFilters.push(filter);
    }

    setSelectedFilters(tempFilters);
  };

  useEffect(() => {
    onSelectFilter(selectedFilters);
  }, [selectedFilters]);

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
