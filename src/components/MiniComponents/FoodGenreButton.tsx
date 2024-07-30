import { useState } from "react";
import "./MiniComponents.css";

interface Props {
  genreName: string;
  size?: string;
  disabled?: boolean;
  onSelectFilter: (filter: string) => void;
}

const FoodGenreButton = ({
  genreName,
  disabled = false,
  onSelectFilter,
}: Props) => {
  const [active, setActive] = useState("");
  return (
    <button
      className={"genre-button" + active}
      key={genreName}
      disabled={disabled}
      onClick={() => {
        console.log("clicked");
        if (active.length === 0) {
          setActive("-active");
          onSelectFilter(genreName);
        } else {
          onSelectFilter(genreName);
          setActive("");
        }
      }}
    >
      {genreName}
    </button>
  );
};

export default FoodGenreButton;
