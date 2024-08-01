import "./RestaurantCard.css";
import "./MiniComponents/MiniComponents.css";
import NotFoundImage from "../assets/RestaurantPics/NotFound.png";
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
  image,
}: Props) => {
  let imageSrc = image;
  if (imageSrc === null) {
    imageSrc = NotFoundImage;
  }
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
        <img className="card-image" src={imageSrc}></img>
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
