import NavItem from "../NavItem"
import styles from './navigation.module.css'
import { links } from "../../data"

const Navigation = () => {

    // const links = ['Home', 'Mammals', 'Birds', 'Reptiles']

    return (
        <nav className={styles.navLinkContainer}>
            {links.map((item, index) => <NavItem key={index} path={item} name={item}/>)}
        </nav>
    )
}

export default Navigation