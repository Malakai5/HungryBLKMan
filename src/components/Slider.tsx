import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { slideItemType } from "../types";
import "./Slide.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 320 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

interface Props {
  items: Array<slideItemType>;
}

const Slider = ({ items }: Props) => {
  return (
    <div className="slide-container">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={false}
        draggable={false}
        showDots={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {items.map((item, index) => {
          return (
            <div className="slide-item" key={index}>
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
                className="slide-image"
              ></img>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
