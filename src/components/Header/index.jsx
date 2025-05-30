import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import Navigation from '../Navigation'
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <Link to='/'> 
                <img src={Logo} className={styles.logoMd} alt="Logotype" />
            </Link>
            <Navigation/>
        </header>
    )
}

export default Header