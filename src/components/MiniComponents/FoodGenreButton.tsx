import "./MiniComponents.css";

interface Props {
  genreName: string;
  size?: string;
}

const FoodGenreButton = ({ genreName, size = "medium" }: Props) => {
  return <button className={"genre-button " + size} key={genreName}>{genreName}</button>;
};

export default FoodGenreButton;
