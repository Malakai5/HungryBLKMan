import { useState } from "react";
import "./MiniComponents.css";

interface Props {
  genreName: string;
  size?: string;
  disabled?: boolean;
  onCard? : string;
  onSelectFilter: (filter: string) => void;
}

const FoodGenreButton = ({
  genreName,
  disabled = false,
  onSelectFilter,
  onCard = ""
}: Props) => {
  const [active, setActive] = useState("");
  return (
    <button
      className={"genre-button" + active + onCard}
      key={genreName}
      disabled={disabled}
      onClick={() => {
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
