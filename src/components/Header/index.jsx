import Logo from '../../assets/logo.png'
import Navigation from '../Navigation'

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="Logotype" height={50}/>
            <Navigation/>
        </header>
    )
}

export default Header