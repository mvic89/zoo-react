import Sidebar from "../../components/Sidebar";
import MainContent from "../../components/MainContent";
import { useContext } from "react";
import { AnimalContext } from "../../context/AnimalContext";
import animals from "../../animalsdata";

const Home = () => {
  const { selectedAnimal } = useContext(AnimalContext);
  const animal = animals.find(a => a.name === selectedAnimal);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "1rem" }}>
        {animal ? <MainContent animal={animal} /> : <h3>Welcome to the home page!</h3>}
      </div>
    </div>
  );
};

export default Home;