import NavItem from "../NavItem"
import styles from './navigation.module.css'

const Navigation = () => {

    const links = ['Home', 'Mammals', 'Birds', 'Reptiles']

    return (
        <nav className={styles.navLinkContainer}>
            {links.map((item, index) => <NavItem key={index} path={item} name={item}/>)}
        </nav>
    )
}

export default Navigation