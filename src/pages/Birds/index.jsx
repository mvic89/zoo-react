import Sidebar from "../../components/Sidebar";
import GroupContent from "../../components/GroupContent";
import { useContext, useEffect } from "react";
import { AnimalContext } from "../../context/AnimalContext";
import animals from "../../animalsdata";
import styles from './birds.module.css'

const Birds = () => {
  const { selectedAnimal, setSelectedAnimal } = useContext(AnimalContext);

  useEffect(() => {
    setSelectedAnimal(null);
  }, [setSelectedAnimal]);

  const animal = animals.find(a => a.name === selectedAnimal && a.group === "bird");

  return (
    <div className={styles.birdContainer}>
      <Sidebar />
      <div style={{ marginLeft: "1rem" }}>
        {animal ? <GroupContent animal={animal} /> : <h3>Welcome to Birds page!</h3>}
      </div>
    </div>
  );
};

export default Birds;
