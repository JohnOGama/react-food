import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Food from "./components/Food";
import FoodCard from "./components/FoodCard";
import Footer from "./components/Footer";
import FoodModal from "./components/Modal/FoodModal";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <FoodCard />
      <Food />
      <Footer />
      <FoodModal />
    </Fragment>
  );
}

export default App;
