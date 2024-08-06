import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RestaurantCard from "./components/RestaurantCard";
import SearchBar from "./components/SearchBar";
import "./SearchPage.css";
import { autoCompleteItem, restaurant } from "./types";
import { Tab, Tabs, Button, Modal, Form } from "react-bootstrap";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

function createCard(restaurant: restaurant, index: number) {
  let address =
    restaurant.location.addressNumber +
    " " +
    restaurant.location.streetName +
    ", " +
    restaurant.location.state;
  let filters = [restaurant.type];
  return (
    <RestaurantCard
      key={index}
      description={restaurant.description}
      title={restaurant.name}
      address={address}
      rating={restaurant.rating * 20}
      filters={filters}
      image={restaurant.imagePath}
    ></RestaurantCard>
  );
}

interface Props {
  restaurants: Array<restaurant>;
}

const SearchPage = ({ restaurants }: Props) => {
  const [chosenRestaurants, setChosenRestaurants] = useState(Array<restaurant>);

  const handleFilterSelected = async (filters: Array<string>) => {
    let tempRests: Array<restaurant> = restaurants;

    for (let i = 0; i < filters.length; i++) {
      tempRests = tempRests.filter(
        (restaurant) => restaurant.type === filters[i]
      );
    }

    //useState is one step behind(Same problem as text input)
    setChosenRestaurants(tempRests);
  };

  const handleTextChange = (text: string) => {
    let tempRests = restaurants.filter((restaurant) =>
      restaurant.name.includes(text)
    );
    setChosenRestaurants(tempRests);
  };

  const [foodTypes, setFoodTypes] = useState<string[]>([]);
  const [filterAuto, setFilterAuto] = useState<autoCompleteItem[]>([]);

  function getTypes() {
    const raw = JSON.stringify({
      object_type: "column",
      key: "food_type",
      table: "restaurant",
    });
    const requestOptions: RequestInit = {
      method: "POST",
      body: raw,
      redirect: "follow",
    };

    const getMyTypes = async () => {
      const response = await fetch(
        "https://y629tb85u6.execute-api.us-east-1.amazonaws.com/dev/filter",
        requestOptions
      );
      const data = await response.json();
      const types = await data.body.map((r: any) => r);
      setFoodTypes(types);
    };

    useEffect(() => {
      let helper = async () => {
        await getMyTypes();
      };
      helper();
    }, []);

    useEffect(() => {
      let count = 0;
      let tempList = foodTypes.map((r: string) => {
        let item = {
          id: count,
          name: r,
        };
        count++;
        return item;
      });
      setFilterAuto(tempList);
    }, [foodTypes]);
  }
  getTypes();

  function AddButton() {
    const [show, setShow] = useState(false);
    const [foodType, setFoodType] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleOnSelect = (item: any) => {
      setFoodType(item.name);
    };

    return (
      <>
        <Button className="add-button" onClick={handleShow}>
          Add a new restaurant
        </Button>

        <Modal className="popup" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Advanced</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tabs
              defaultActiveKey="general"
              id="uncontrolled-tab"
              className="mb-3"
            >
              <Tab eventKey="general" title="General">
                <Form>
                  <Form.Label>Restaurant Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Enter restaurant name"
                    required
                  />
                  <Form.Label>What kinda food we eating?</Form.Label>
                  <Form.Control
                    type="foodType"
                    placeholder="Enter food type"
                    value={foodType}
                    onChange={(event) => setFoodType(event.target.value)}
                    required
                  />
                  <Form.Text className="text-muted">
                    (Search for suggestions here)
                  </Form.Text>
                  <ReactSearchAutocomplete
                    items={filterAuto}
                    onSelect={handleOnSelect}
                    styling={{ zIndex: 4 }} // To display it on top of the search box below
                    autoFocus
                  />
                </Form>
              </Tab>
              <Tab eventKey="profile" title="Profile">
                Tab content for Profile
              </Tab>
              <Tab eventKey="contact" title="Contact">
                Tab content for Contact
              </Tab>
            </Tabs>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="search-view">
        <SearchBar
          filters={foodTypes}
          onSelectFilter={handleFilterSelected}
          onTextEntry={handleTextChange}
        ></SearchBar>
        <div className="card-view">
          {chosenRestaurants.map((restaurant, index) => {
            return createCard(restaurant, index);
          })}
        </div>
        {AddButton()}
      </div>
      <Footer></Footer>
    </>
  );
};

export default SearchPage;
