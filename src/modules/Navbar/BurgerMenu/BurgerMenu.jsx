import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './BurgerMenu.module.css';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(prev => !prev);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className={styles.container}>
      {/* Иконка-бургер */}
      <button className={styles.burger} onClick={toggleMenu}>
        <span className={`${styles.line} ${isOpen ? styles.open : ''}`}></span>
        <span className={`${styles.line} ${isOpen ? styles.open : ''}`}></span>
        <span className={`${styles.line} ${isOpen ? styles.open : ''}`}></span>
      </button>

      {/* Меню */}
      <nav className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
        <NavLink to="/" onClick={closeMenu} className={styles.link}>Main Page</NavLink>
        <NavLink to="/categories" onClick={closeMenu} className={styles.link}>Categories</NavLink>
        <NavLink to="/products" onClick={closeMenu} className={styles.link}>All products</NavLink>
        <NavLink to="/sales" onClick={closeMenu} className={styles.link}>All sales</NavLink>
      </nav>
    </div>
  );
};

export default BurgerMenu;


