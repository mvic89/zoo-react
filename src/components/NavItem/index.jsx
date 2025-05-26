import { NavLink } from "react-router-dom";

const NavItem = ({path, name}) => {
    return (
        <NavLink to={path.toLowerCase() === 'home' ? '/' : path.toLowerCase()}>{name}</NavLink>
    )
}

export default NavItem