import Sidebar from "../../components/Sidebar";
import MainContent from "../../components/MainContent";
import { useContext, useEffect } from "react";
import { AnimalContext } from "../../context/AnimalContext";
import animals from "../../animalsdata";
import styles from './home.module.css'

const Home = () => {
  const { selectedAnimal, setSelectedAnimal } = useContext(AnimalContext);

  useEffect(() => {
    setSelectedAnimal(null);
  }, [setSelectedAnimal]);

  const animal = animals.find(a => a.name === selectedAnimal);

  return (
    <div className={styles.homeContainer}>
      <Sidebar />
      <div className={styles.animalsContainer}>
        {animal ? <MainContent animal={animal} /> : <h3>Welcome to the home page!</h3>}
      </div>
    </div>
  );
};

export default Home;