import Button from '../../shared/components/Button/Button';

import { Link } from 'react-router-dom';

import notFoundImp from '../../assets/not-found-page/not-found.png'
import Number from '../../assets/not-found-page/Number';

import styles from './NotFoundPage.module.css'

const NotFoundPage = () => {
    return (
        <main>
            <div>
                <div className={styles.wrapper} >
                    <div className={styles.box}>
                        <div className={styles.wrapImg}>
                            <div className={styles.number} ><Number /></div>
                            <div className={styles.img} ><img src={notFoundImp} alt="Not Found" /></div>
                            <div className={styles.number}><Number /></div>
                        </div>
                        <div className={styles.info}>
                            <h1 className={styles.title}>Page Not Found</h1>
                            <p className={styles.descr}>We're sorry, the page you requested could not be found.
                                Please go back to the homepage.</p>
                        </div>
                        <div className={styles.btn}> <Link to="/"><Button>Go Home</Button></Link> </div>

                    </div>
                </div>
            </div>

        </main>
    )
}

export default NotFoundPage;