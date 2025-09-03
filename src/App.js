import './App.css';
import NavbarComponent from './componants/NavbarComponent';
import HomeComponent from './HomeComponent';
import Categorycomponent from "./componants/categorycomponent";
import Trendingcomponents from './componants/Trendingcomponents';
import Cards from './componants/Cards';
function App() {
  return (
   <>
   <NavbarComponent/>
   <HomeComponent/>
    <Categorycomponent/>
   <Trendingcomponents/>
    <Cards/>
   </>
  );
}

export default App;
