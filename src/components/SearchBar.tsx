import "./SearchBar.css";
import "../components/Navbar.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import logo from "../assets/HungryLogo.png";
import ButtonSlider from "./MiniComponents/ButtonSlider";
import { useEffect, useState } from "react";



interface props {
  onSelectFilter: (filters: Array<string>) => void;
  onTextEntry: (input: string) => void;
}

const SearchBar = ({ onSelectFilter, onTextEntry }: props) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [foodTypes, setFoodTypes] = useState<string[]>([]);

  function getTypes() {
    const raw = JSON.stringify({
      object_type: "column",
      key: "food_type",
      table: "restaurant",
    });
    const requestOptions: RequestInit = {
      method: "POST",
      body: raw,
      redirect: "follow",
    };

    const getMyTypes = async () => {
      const response = await fetch(
        "https://y629tb85u6.execute-api.us-east-1.amazonaws.com/dev/filter",
        requestOptions
      );
      const data = await response.json();
      const types = await data.body.map((r: any) => r);
      setFoodTypes(types)
    };

    useEffect(() => {
      let helper = async () => {
        await getMyTypes();
      };
      helper();
    }, []);
  }
  getTypes();

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    onTextEntry(inputValue);
  }, [inputValue]);

  const handleFilterSelected = (filter: string) => {
    let tempFilters: Array<string> = [];

    if (selectedFilters.includes(filter)) {
      tempFilters = selectedFilters.filter((entry) => entry !== filter);
    } else {
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
          items={foodTypes}
        ></ButtonSlider>
      </ul>
      <button className="filter-toggler"> More Search Filters </button>
    </div>
  );
};

export default SearchBar;
