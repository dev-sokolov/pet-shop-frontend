import Button from '../../shared/components/Button/Button';

import { Link } from 'react-router-dom';

import styles from './DiscountSection.module.css'

const DiscountSection = () => {
    return (
        <section className={styles.discount}>
            <h1 className={styles.title}>
                Amazing Discounts on Pets Products!
            </h1>
            <Link to="/sales">
               <Button type="button" >Check out</Button>
            </Link>       
        </section>
    )
}

export default DiscountSection;