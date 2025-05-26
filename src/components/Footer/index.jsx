import styles from './footer.module.css'
import { links } from '../../data'
import { Link,  NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <>
        <footer className={styles.footer}>
            <Link to='/'>
                <img src={Logo} className={styles.logoSm} alt="Logotype" />
            </Link>
            <div className={styles.footerLinksContainer}>
                <NavLink to={'/'} className={({isActive}) => isActive ? styles.activeLink : styles.footerLink }>Home</NavLink>
                <NavLink to={'/mammals'} className={({isActive}) => isActive ? styles.activeLink : styles.footerLink }>Mammals</NavLink>
                <NavLink to={'/birds'} className={({isActive}) => isActive ? styles.activeLink : styles.footerLink }>Birds</NavLink>
                <NavLink to={'/reptiles'} className={({isActive}) => isActive ? styles.activeLink : styles.footerLink }>Reptiles</NavLink>
            </div>
            <p className={styles.copyText}>&copy; Vic 2025</p>
        </footer>
        </>
    )
}

export default Footer