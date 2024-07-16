import "./SearchBar.css";
import logo from "../assets/HungryLogo.png";
import ButtonSlider from "./MiniComponents/ButtonSlider";

const genres: string[] = [
  "More Filters",
  "Korean BBQ",
  "Mexican",
  "Soul Food",
  "American",
  "Italian",
];

const SearchBar = () => {
  return (
    <div className="bar">
      <div className="search-logo">
        <textarea placeholder="Search..."></textarea>
        <img src={logo} alt="logo" className="icon"></img>
      </div>
      <ul className="filter-list">
        <ButtonSlider items={genres}></ButtonSlider>
      </ul>
    </div>
  );
};

export default SearchBar;
