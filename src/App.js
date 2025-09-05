// src/App.js
import "./App.css";
import NavbarComponent from "./componants/NavbarComponent";
import HomeComponent from "./HomeComponent";
import Categorycomponent from "./componants/categorycomponent";
import Trendingcomponents from "./componants/Trendingcomponents";
import Cards from "./componants/Cards";
import { Provider } from "react-redux";
import store from "./componants/Store";

function App() {
  return (
    <Provider store={store}>
      <NavbarComponent />
      <HomeComponent />
      <Categorycomponent />
      <Trendingcomponents />
      <Cards />
    </Provider>
  );
}

export default App;
