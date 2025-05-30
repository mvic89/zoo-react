import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import styles from './layout.module.css'
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar/Index";


const Layout = () => {
    return (
        <div className={styles.layoutContainer}>
            <Header/>
            <div className={styles.contentContainer}>
                <Sidebar/>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default Layout