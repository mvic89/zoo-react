import NavItem from "../NavItem"

const Navigation = () => {

    const links = ['Home', 'Mammals', 'Birds', 'Reptiles']

    return (
        <nav>
            {links.map((item, index) => <NavItem key={index} path={item} name={item}/>)}
        </nav>
    )
}

export default Navigation