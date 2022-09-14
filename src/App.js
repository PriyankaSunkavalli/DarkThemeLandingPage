import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ImageContainer from "./components/ImageContainer";
import SecondImageContainer from "./components/SecondImageContainer";
import GridContainer from "./components/GridContainer";
import FifthComponent from "./components/FifthComponent";
import CardsComponent from "./components/CardsComponent";
import SixthComponent from "./components/SixthComponent";

function App() {
  return (
    <div>
      <Navbar />
      <ImageContainer />
      <SecondImageContainer />
      <GridContainer />
      <FifthComponent />
      <CardsComponent />
      <SixthComponent />
    </div>
  );
}

export default App;
