// src/App.js
// import "./App.css";
// import NavbarComponent from "./componants/NavbarComponent";
// import HomeComponent from "./HomeComponent";
// import Categorycomponent from "./componants/categorycomponent";
// import Trendingcomponents from "./componants/Trendingcomponents";
// import Cards from "./componants/Cards";
// import { Provider } from "react-redux";
// import store from "./componants/Store";
// import BestSellingProducts from "./componants/BestSellingProducts";
// import jsonData from "./data/prData.json"
import { Login } from "./componants/Login";
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    
      // <Provider store={store}>
      //  <NavbarComponent />
      //   <HomeComponent />
      //   <Categorycomponent />
      //   <Trendingcomponents />
      // <Cards />
      //   <BestSellingProducts data={jsonData[0]}/>
      //   <BestSellingProducts data={jsonData[1]}/>
      //   <BestSellingProducts data={jsonData[2]}/> 
      // </Provider>
    
  );
}

export default App;