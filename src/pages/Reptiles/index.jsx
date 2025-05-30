import GroupContent from "../../components/GroupContent";
import { useContext, useEffect } from "react";
import { AnimalContext } from "../../context/AnimalContext";
import animals from "../../animalsdata";
import styles from './reptiles.module.css'

const Reptiles = ({reptilesText}) => {
  const { selectedAnimal, setSelectedAnimal } = useContext(AnimalContext);

  useEffect(() => {
    setSelectedAnimal(null);
  }, [setSelectedAnimal]);

  const animal = animals.find(a => a.name === selectedAnimal && a.group === "reptile");

  return (
    <div className={styles.reptileContainer}>
      <div className={styles.animalsContainer}>
        {animal ? <GroupContent animal={animal} /> : <h3 className={styles.reptileStyling}>{reptilesText}</h3>}
      </div>
    </div>
  );
};

export default Reptiles;
