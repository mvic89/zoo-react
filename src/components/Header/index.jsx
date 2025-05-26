import Logo from '../../assets/logo.png'
import Navigation from '../Navigation'
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <img src={Logo} alt="Logotype" height={50}/>
            <Navigation/>
        </header>
    )
}

export default Header