import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import styles from './layout.module.css'
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";

const Layout = () => {
    return (
        <div className={styles.layoutContainer}>
            <Header/>
            <Sidebar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout