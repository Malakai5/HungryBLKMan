import { slideItemType } from "../types";
import "./ImageContainer.css"

type Props = slideItemType;

const ImageContainer = ({ imageSrc, imageAlt }: Props) => {
  return <img className = "image" src={imageSrc} alt={imageAlt}></img>;
};

export default ImageContainer;