import "./RestaurantCard.css";
import "./MiniComponents/MiniComponents.css";
import ButtonSlider from "./MiniComponents/ButtonSlider";
import SegmentBar from "./MiniComponents/SegmentBar";

interface Props {
  image?: string;
  description?: string;
  title: string;
  address: string;
  rating?: number;
  filters: Array<string>;
}
//onSelectFilter is blank for a reason
const RestaurantCard = ({
  description,
  title,
  address,
  filters,
  rating,
  image = "NotFound.png",
}: Props) => {
  const imageSrc = "../assets/RestaurantPics/NotFound.png";
  console.log(imageSrc);
  return (
    <div className="card" key={title}>
      <div className="card-info" key={"card-info"}>
        <div className="card-description" key={"Hollow"}>
          <h3 className="title" key="title">
            {title}
          </h3>
          <p className="address" key="address">
            {address}
          </p>
          <p className="summary" key="summary">
            {description}
          </p>
        </div>
        <img
          className="card-image"
          src="https://hungryblkman.s3.amazonaws.com/headshot.png"
        ></img>
        <SegmentBar rating={rating}></SegmentBar>
      </div>
      <ul className="filters">
        <ButtonSlider
          items={filters}
          disabled={true}
          onSelectFilter={() => {}}
          onCard="-card"
        ></ButtonSlider>
      </ul>
    </div>
  );
};

export default RestaurantCard;
