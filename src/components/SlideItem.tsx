import { slideItemType } from "../types";
import "./Slide.css";

type Props = slideItemType;

const SlideItem = ({ imageSrc, imageAlt }: Props) => {
  return (
      <img src={imageSrc} alt={imageAlt} className="slide-image"></img>
  );
};

export default SlideItem;
