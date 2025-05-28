import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import MainContent from "../MainContent";
import Home from "../Home";
import styles from './layout.module.css';

const Layout = () => {
  const [activeAnimal, setActiveAnimal] = useState(null);
  const location = useLocation();

  const handleAnimalClick = (animal) => {
    if (activeAnimal?.name === animal.name) {
      setActiveAnimal(null); // Toggle off
    } else {
      setActiveAnimal(animal); // Set new
    }
  };

  const isHomeRoute = location.pathname === "/";

  return (
    <div className={styles.layoutContainer}>
      <Header />
      <div className={styles.mainContentArea}>
        <Sidebar activeAnimal={activeAnimal} onAnimalClick={handleAnimalClick} />
        <main className={styles.mainContent}>
          {isHomeRoute ? (
            activeAnimal ? <MainContent animal={activeAnimal} /> : <Home />
          ) : (
            <Outlet />
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;