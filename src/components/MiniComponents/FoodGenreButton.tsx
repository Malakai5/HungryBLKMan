import "./MiniComponents.css";

interface Props {
  genreName: string;
  size?: string;
  disabled? : boolean
}

const FoodGenreButton = ({ genreName, size = "medium", disabled = true }: Props) => {
  return <button className={"genre-button " + size} key={genreName} disabled={disabled}>{genreName}</button>;
};

export default FoodGenreButton;
