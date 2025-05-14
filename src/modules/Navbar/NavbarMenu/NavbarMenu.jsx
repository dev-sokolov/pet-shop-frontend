
import { NavLink } from "react-router-dom";

import styles from './NavbarMenu.module.css'

const NavbarMenu = () => {
    return (
        <>
            <ul className={styles.menu}>
                <li >
                    <NavLink className={styles.link} to="/">Main Page</NavLink>
                </li>
                <li>
                    <NavLink className={styles.link} to="/categories">Categories</NavLink>
                </li>
                <li>
                    <NavLink className={styles.link} to="/products">All products</NavLink>
                </li>
                <li>
                    <NavLink className={styles.link} to="/sales">All sales</NavLink>
                </li>
            </ul>
        </>
    )
}

export default NavbarMenu;