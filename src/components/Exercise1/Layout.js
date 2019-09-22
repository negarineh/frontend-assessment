import React from 'react';
import * as styles from './Layout.module.scss';
import Tabs from './Tabs/Tabs';

function Layout() {
    return (
        <div className={styles.App}>
            <div className={styles.TopRow}>
                <div className={styles.Header}>
                    {/*<img className='Img' src='http://via.placeholder.com/1920x650' alt='http://via.placeholder.com/1920x650' /> */}
                    <h1 className={styles.AppHeader}>Hello Developer!</h1>
                    <p className={styles.AppText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
            <div className={styles.BottomRow}>
                <div className={styles.TabsContainer}>
                    <Tabs/>
                </div>
            </div>

        </div>
    );
}

export default Layout;
