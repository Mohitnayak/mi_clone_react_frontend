import './App.css';
import PreNavbar from './components/PreNavbar';
import NavBar from './components/NavBar.js'
import { BrowserRouter as Router} from "react-router-dom"
import Slider from "./components/Slider.js"
import data from "./data/data.json"
import Offers from "./components/Offers.js"
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"




function App() {


  return (
    <Router>
      <PreNavbar />
      <NavBar />
      <Slider start={data.banner.start}/>
      <Offers offer = {data.offer}/>
      <Heading text = "STAR PRODUCTS"/>
      <StarProduct starProduct = {data.starProduct}/>


    </Router>
  );
}

export default App;
