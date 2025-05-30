import GroupContent from "../../components/GroupContent";
import { useContext, useEffect } from "react";
import { AnimalContext } from "../../context/AnimalContext";
import animals from "../../animalsdata";
import styles from './mammals.module.css'

const Mammals = ({mammalsText}) => {
  const { selectedAnimal, setSelectedAnimal } = useContext(AnimalContext);

  useEffect(() => {
    setSelectedAnimal(null);
  }, [setSelectedAnimal]);

  const animal = animals.find(a => a.name === selectedAnimal && a.group === "mammals");

  return (
    <div className={styles.mammalContainer}>
      <div className={styles.animalsContainer}>
        {animal ? <GroupContent animal={animal} /> : <h3 className={styles.mammalStyling}>{mammalsText}</h3>}
      </div>
    </div>
  );
};

export default Mammals;
