import "../components/Navbar.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import { Link } from "react-router-dom";
import imageToAdd from "../assets/HungryLogo.png";

const Navbar = () => {
  return (
    <>
      <nav className="nav navbar sticky-top navbar-dark bg-black">
        <Link className="navbar-brand" to="../">
          <img
            src={imageToAdd}
            alt="Logo"
            height="30px"
            width="30px"
            className="rounded-circle"
          />
        </Link>

        <h2 className="title text-light top-50">HUNGRY BLK MAN</h2>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
      <div
        className="collapse collapse sticky-top bg-dark"
        id="navbarToggleExternalContent"
      >
        <div className="bg-dark p-4">
          <Link to="../">Home</Link>
          <br></br>
          <Link to="../search">Search Page</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
