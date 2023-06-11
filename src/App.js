import logo from "./logo.svg";
import "./App.css";
import restaurantImg from "./images/restaurant2.webp";

import { BusinessList } from "./Components/BusinessList";
import SearchBar from "./Components/SearchBar";

function App() {
  const business = {
    imageSrc:
      "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Bordertown",
    state: "NY",
    zipCode: "10101",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90,
  };

  const businesses = [
    business,
    business,
    business,
    business,
    business,
    business,
    business,
    business,
  ];

  return (
    <>
      <div className="wrapper">
        <img
          id="restaurant-img"
          src={restaurantImg}
          alt="restaurant-background"
        />
        <div className="search-wrapper">
          <SearchBar />
        </div>
      </div>
      <BusinessList businesses={businesses} />
    </>
  );
}

export default App;
