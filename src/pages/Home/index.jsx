import Sidebar from "../../components/Sidebar";
import MainContent from "../../components/MainContent";
import { useContext, useEffect } from "react";
import { AnimalContext } from "../../context/AnimalContext";
import animals from "../../animalsdata";
import styles from './home.module.css'

const Home = ({homeText}) => {
  const { selectedAnimal, setSelectedAnimal } = useContext(AnimalContext);

  useEffect(() => {
    setSelectedAnimal(null);
  }, [setSelectedAnimal]);

  const animal = animals.find(a => a.name === selectedAnimal);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.animalsContainer}>
        {animal ? <MainContent animal={animal} /> : <h3 className={styles.homeStyling}>{homeText}</h3>}
      </div>
    </div>
  );
};

export default Home;