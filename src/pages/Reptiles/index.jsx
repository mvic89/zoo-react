import Sidebar from "../../components/Sidebar";
import GroupContent from "../../components/GroupContent";
import { useContext } from "react";
import { AnimalContext } from "../../context/AnimalContext";
import animals from "../../animalsdata";

const Reptiles = () => {
  const { selectedAnimal } = useContext(AnimalContext);
  const animal = animals.find(a => a.name === selectedAnimal && a.group === "reptile");

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "1rem" }}>
        {animal ? <GroupContent animal={animal} /> : <h3>Welcome to Reptiles page!</h3>}
      </div>
    </div>
  );
};

export default Reptiles;