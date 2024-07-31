import Navbar from "./components/Navbar";
import biopic from "./assets/PapaSmurf.jpg";
import foodImage from "./assets/FoodImage.png";
import ImageContainer from "./components/ImageContainer";
import Slider from "./components/Slider";
import OpeningBox from "./components/OpeningBox";
import HeaderBar from "./components/HeaderBar";
import "./HomePage.css";

import firstImage from "./assets/FoodCarousel/CubanFood.jpg";
import secondImage from "./assets/FoodCarousel/EthiopianFood.jpg";
import thirdImage from "./assets/FoodCarousel/Pasta.jpg";
import fourthImage from "./assets/FoodCarousel/Ramen.jpg";
import fifthImage from "./assets/FoodCarousel/SoulFood.jpg";
import sixthImage from "./assets/FoodCarousel/Steak.jpg";
import seventhImage from "./assets/FoodCarousel/Waffle.jpg";
import eighthImage from "./assets/FoodCarousel/Wangz.jpg";
import Footer from "./components/Footer";

const firstItems = [
  {
    imageSrc: firstImage,
    imageAlt: "Cuban",
  },
  {
    imageSrc: secondImage,
    imageAlt: "Ethiopian",
  },
  {
    imageSrc: thirdImage,
    imageAlt: "Pasta",
  },
  {
    imageSrc: fourthImage,
    imageAlt: "Ramen",
  },
  {
    imageSrc: fifthImage,
    imageAlt: "Soul",
  },
  {
    imageSrc: sixthImage,
    imageAlt: "Steak",
  },
  {
    imageSrc: seventhImage,
    imageAlt: "Waffles",
  },
  {
    imageSrc: eighthImage,
    imageAlt: "Wangz",
  },
];

function HomePage() {
  return (
    <>
      <div className="home-view">
        <Navbar></Navbar>
        <Slider items={firstItems}></Slider>
        <OpeningBox></OpeningBox>
        <HeaderBar
          header="Fan Favorites"
          sub="Certified cuisine, it's bussin!"
          backgroundColor="white"
        ></HeaderBar>
        <div className="big-food-image">
          <ImageContainer imageSrc={foodImage} imageAlt="Food"></ImageContainer>
        </div>
        <div className="highlight">
          <img className="biopic" src={biopic} alt="MEEEEEEE"></img>
          <div className="textbox">
            <h2>HungryBlkMan review</h2>
            <p>
              Hey food lovers, I'm Malik. I created this website to share my
              passion for local food. Despite my quirks, I built this web app
              for my friends and me to access and update our food database.
              Enjoy the site and gain some happy weight!
            </p>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default HomePage;
