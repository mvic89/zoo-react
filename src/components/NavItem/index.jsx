import { NavLink } from "react-router-dom";
import styles from './nav-item.module.css'

const NavItem = ({path, name}) => {
    return (
        <NavLink className={({isActive}) => `${styles.navItemBtn} ${isActive ? styles.active : ''}`} to={path.toLowerCase() === 'home' ? '/' : path.toLowerCase()}>{name}</NavLink>
    )
}

export default NavItem