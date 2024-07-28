import "./SearchBar.css";
import logo from "../assets/HungryLogo.png";
import ButtonSlider from "./MiniComponents/ButtonSlider";
import { useState } from "react";

const genres: string[] = [
  "More Filters",
  "Korean BBQ",
  "Mexican",
  "Soul Food",
  "American",
  "Italian",
];

interface props {
  onSelectFilter: (filter: string) => void;
  onTextEntry: (input: string) => void;
}

const SearchBar = ({ onSelectFilter, onTextEntry }: props) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event:any) => {
    setInputValue(event.target.value);
    onTextEntry(inputValue);
  };

  return (
    <div className="bar">
      <div className="search-logo">
        <textarea
          placeholder="Search..."
          value={inputValue}
          onChange={(event) => {
            handleInputChange(event)
          }}
        ></textarea>
        <img src={logo} alt="logo" className="icon"></img>
      </div>
      <ul className="filter-list">
        <ButtonSlider
          onSelectFilter={onSelectFilter}
          items={genres}
        ></ButtonSlider>
      </ul>
    </div>
  );
};

export default SearchBar;
