import React, { useState } from 'react'
import RollButton from '../components/RollButton'
import styles from '../CSS_MODULES/dice_roller.module.css'


function DiceRoller(props) {

    const dice = [20, 12, 10, 8, 6, 4, 3, 2]

    const [hidden, setHidden] = useState(1);


    const hideTray = () =>{
        if (hidden){
            setHidden(0)
        } else {
            setHidden(1)
        }
        return
    }

    return (
        <div className={styles.tray_container}>
            <button className={styles.tray_button } onClick={hideTray}>{"<"}</button>
            {hidden ? '' : <ul className={styles.dice_tray }>

                {dice.map(ele => {
                    return (

                            <RollButton key={ele} max={ele} />

                    )
                }
                )}
            </ul>}
        </div>
    )
}

export default DiceRoller

// + (hidden ? styles.close_tray : '')
