import Logo from '../../assets/logo.png'
import Navigation from '../Navigation'
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <img src={Logo} className={styles.logoMd} alt="Logotype" />
            <Navigation/>
        </header>
    )
}

export default Header