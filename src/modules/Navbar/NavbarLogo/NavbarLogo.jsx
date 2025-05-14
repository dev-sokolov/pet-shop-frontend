
import { NavLink } from "react-router-dom"

import LogoNav from "../../../shared/components/icons/LogoNav"

import styles from './NavbarLogo.module.css'

const NavbarLogo = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <NavLink to="/">
                    <LogoNav className={styles.logo} />
                </NavLink>
            </div>
        </>
    )
}

export default NavbarLogo