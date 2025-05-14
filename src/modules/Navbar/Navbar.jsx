import NavbarLogo from './NavbarLogo/NavbarLogo';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarCart from './NavbarCart/NavbarCart';

import styles from './Navbar.module.css';

import Container from '../Container/Container';

const Navbar = () => {
    return (
        <nav >
            <Container>
                <div className={styles.wrapper}>
                    <NavbarLogo />
                    <NavbarMenu />
                    <NavbarCart />
                </div>
            </Container>
            <div className={styles.line}></div>
        </nav>
    )
}

export default Navbar;
