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
                    <NavLink className="Navlink" to="/create-character" activeclass="active">Create Your Characters</NavLink>

                </div>
                <div className={styles.choose_path_container}>
                    <img alt="" className={styles.choose_image} src="https://immarpalomera.files.wordpress.com/2010/12/dungeon-delve1.jpg" />
                    <NavLink className="Navlink" to="/characters" activeclass="active">Select Your Character</NavLink>
                    <NavLink className="Navlink" to="/adventures" activeclass="active">Start an Adventure</NavLink>
                </div>
            </div>
        </>
    )
}

export default CreateOrPlayPage
