import logo from "./logo.svg";
import "./App.css";
import restaurantImg from "./images/restaurant2.webp";

import { BusinessList } from "./Components/BusinessList";
import SearchBar from "./Components/SearchBar";

function App() {
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
      <BusinessList />
    </>
  );
}

export default App;
