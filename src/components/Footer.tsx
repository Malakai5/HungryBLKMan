import { SocialIcon } from "react-social-icons";
import "./Footer.css";
import "./MiniComponents/MiniComponents.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <ul className="pages">
          <Link className="page-link" to="../">
            Home
          </Link>
          <Link className="page-link" to="../search">
            Search
          </Link>
          <p className="page-link">Submissions</p>
          <p className="page-link">About</p>
          <p className="page-link">Contact</p>
        </ul>
        <SocialIcon
          className="social-link"
          url="https://www.linkedin.com/in/malik-mandy-a25240178/"
          bgColor="black"
          fgColor="white"
          style={{ height: 25, width: 25 }}
        />
        <SocialIcon
          className="social-link"
          url="https://www.instagram.com/whos_malakai/?hl=en"
          bgColor="black"
          fgColor="white"
          style={{ height: 25, width: 25 }}
        />
      </div>
    </>
  );
};

export default Footer;
