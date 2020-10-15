import React from 'react';
import styles from '../CSS_MODULES/footer.module.css'
function Footer (props) {
    return (
        <div className={styles.footer_bar}>
            <div className={styles.footer_link_container}>
                <button className={styles.footer_link}>Github</button>
                <button className={styles.footer_link}>About Me</button>
            </div>
        </div>
    )
};

export default Footer;
