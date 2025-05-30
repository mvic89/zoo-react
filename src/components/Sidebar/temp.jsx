import { NavLink, useLocation } from "react-router-dom";
import animals from "../../animalsdata";
import styles from './sidebar.module.css'
import { useContext } from "react";
import { AnimalContext } from "../../context/AnimalContext";

const Sidebar = () => {
  const { selectedAnimal, toggleAnimal } = useContext(AnimalContext);
  const location = useLocation();
  const path = location.pathname;

  const pathGroupMap = {
    "/mammals": "mammals",
    "/birds": "bird",
    "/reptiles": "reptile"
  };

  const group = pathGroupMap[path];
  let filteredAnimals = group
    ? animals.filter((a) => a.group === group)
    : animals;

  return (
    <aside className={styles.sidebar}>
      {filteredAnimals.map((animal) => (
        <NavLink
          key={animal.name}
          to="#"
          onClick={() => toggleAnimal(animal.name)}
          className={({ isActive }) =>
            `${styles.sidebarItem} ${selectedAnimal === animal.name ? styles.active : ""}`
          }
        >
          {animal.name}
        </NavLink>
      ))}
    </aside>
  );
};

export default Sidebar;