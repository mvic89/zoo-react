import { NavLink, useLocation } from "react-router-dom";
import animals from '../../animalsdata'
import styles from './sidebar.module.css';

const Sidebar = ({ activeAnimal, onAnimalClick }) => {
  const location = useLocation();

  return (
    <aside className={styles.sidebar}>
      <h4>Animals</h4>
      {animals.map((animal) => (
        <NavLink
          key={animal.name}
          to="/"
          className={({ isActive }) =>
            `${styles.animalLink} ${
              activeAnimal?.name === animal.name && location.pathname === "/" ? styles.active : ""
            }`
          }
          onClick={(e) => {
            if (location.pathname === "/") {
              e.preventDefault();
            }
            onAnimalClick(animal);
          }}
        >
          {animal.name}
        </NavLink>
      ))}
    </aside>
  );
};

export default Sidebar;