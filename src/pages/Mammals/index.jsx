import Sidebar from "../../components/Sidebar";
import GroupContent from "../../components/GroupContent";
import { useContext } from "react";
import { AnimalContext } from "../../context/AnimalContext";
import animals from "../../animalsdata";

const Mammals = () => {
  const { selectedAnimal } = useContext(AnimalContext);
  const animal = animals.find(a => a.name === selectedAnimal && a.group === "mammals");

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "1rem" }}>
        {animal ? <GroupContent animal={animal} /> : <h3>Welcome to Mammals page!</h3>}
      </div>
    </div>
  );
};

export default Mammals;