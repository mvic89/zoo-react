import Sidebar from "../../components/Sidebar";
import GroupContent from "../../components/GroupContent";
import { useContext } from "react";
import { AnimalContext } from "../../context/AnimalContext";
import animals from "../../animalsdata";

const Birds = () => {
  const { selectedAnimal } = useContext(AnimalContext);
  const animal = animals.find(a => a.name === selectedAnimal && a.group === "bird");

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "1rem" }}>
        {animal ? <GroupContent animal={animal} /> : <h3>Welcome to Birds page!</h3>}
      </div>
    </div>
  );
};

export default Birds;