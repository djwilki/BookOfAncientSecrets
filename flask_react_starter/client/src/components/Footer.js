import React from 'react';
import styles from '../CSS_MODULES/footer.module.css'
function Footer (props) {
    return (
        <div className={styles.footer_bar}>
            <div className={styles.footer_link_container}>
                <a href="https://github.com/djwilki/BookOfAncientSecrets" className={styles.footer_link}>Github</a>
                <a href="https://www.linkedin.com/in/daniel-wilkins-88348160/" className={styles.footer_link}>About Me</a>
            </div>
        </div>
    )
};

export default Footer;
