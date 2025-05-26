import Logo from '../../assets/logo.png'

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="Logotype" height={50}/>
            <h3>Header!</h3>
        </header>
    )
}

export default Header