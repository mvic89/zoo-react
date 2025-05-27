import { NavLink } from "react-router-dom"
import animals from "../../animalsdata"
import styles from './sidebar.module.css'
import { useState } from "react"

const Sidebar = () => {

    // const [sidebarToggle, setSidebarToggle] = useState(false);
    // const handleClick = () => {
    //     setSidebarToggle(!sidebarToggle)
    // }

    return (
        <>
            <div className={styles.sidebarContainer}>
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