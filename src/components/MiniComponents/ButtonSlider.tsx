import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./MiniComponents.css"
import FoodGenreButton from "./FoodGenreButton";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 1500, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  interface Props{
    items : Array<string>
    disabled? : boolean
    onSelectFilter: (filter: string) => void
  }

const ButtonSlider = ({items, disabled = false, onSelectFilter}: Props) => {
  return (
    <div className="button-slider">
      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={false}
        showDots={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        infinite={false}
        partialVisible={true}
        dotListClass="custom-dot-list-style"
      >
        {items.map((item, index) => {
            return (
                <FoodGenreButton genreName={item} key={index} disabled={disabled} onSelectFilter={onSelectFilter}></FoodGenreButton>
            );
        })}
      </Carousel>
    </div>
  );
};

export default ButtonSlider;
