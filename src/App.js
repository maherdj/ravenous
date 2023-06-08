import logo from './logo.svg';
import './App.css';
import './images/restaurant.jpeg'

import { BusinessList } from './Components/BusinessList';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <>
      <header>
        <img src="images/restaurant.jpeg" alt="restaurant-background"/>
      </header>
      <BusinessList/>
      
         
      <SearchBar />
      
    </>
  );
}

export default App;
