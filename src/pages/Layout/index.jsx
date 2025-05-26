import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import styles from './layout.module.css'

const Layout = () => {
    return (
        <div className={styles.layoutContainer}>
            <Header/>
            <Outlet/>
        </div>
    )
}

export default Layout