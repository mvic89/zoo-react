import { NavLink } from "react-router-dom"
import animals from "../../animalsdata"

const Sidebar = () => {
    return (
        <>
            <div>
                {animals.map((item, index) => (
                    <NavLink 
                        key={index} 
                        to={`/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                        {item.name}
                    </NavLink>
                ))}
            </div>
        </>
    )
}

export default Sidebar