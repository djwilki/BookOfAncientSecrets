import React from 'react'
import styles from '../CSS_MODULES/create_or_play.module.css'
import { NavLink } from 'react-router-dom';

function CreateOrPlayPage(props) {

    return (
        <>
            <div className={styles.outermost_choose_container}>
                <div className={styles.choose_path_container}>
                    <img alt="" className={styles.choose_image} src="https://i.pinimg.com/originals/18/fc/90/18fc90e504fe07c87f25af84c44e144d.jpg" />
                    <NavLink className="Navlink" to="/create-adventure" activeclass="active">Expand Your Adventures</NavLink>
                </div>
                <div className={styles.choose_path_container}>
                    <img alt="" className={styles.choose_image} src="https://immarpalomera.files.wordpress.com/2010/12/dungeon-delve1.jpg" />
                    <NavLink className="Navlink" to="/adventure-play" activeclass="active">Start an Adventure</NavLink>
                </div>
                <div className={styles.choose_path_container}>
                    <img alt="" className={styles.choose_image} src="http://dndspeak.com/wp-content/uploads/2018/04/7d432764399c8d1359ee5326fdac1537-d39rayp.jpg" />
                    <NavLink className="Navlink" to="/create-character" activeclass="active">Manage Characters</NavLink>
                </div>
                <NavLink className={`NavLink ${styles.choose_path_container}`} to="/adventure-play" activeclass="active" className={styles.choose_path_container}>
                    <img alt="" className={styles.choose_image} src="http://2.bp.blogspot.com/-x2KCRXnNqys/TaQr81wjHiI/AAAAAAAAB20/sxCQQ8nomfc/s1600/skane7.jpg" />
                    Select Your Player
                </NavLink>
            </div>
        </>
    )
}

export default CreateOrPlayPage
