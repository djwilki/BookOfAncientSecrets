import React, { useState } from 'react';
import styles from '../CSS_MODULES/roll_button.module.css'

function RollButton({ max }) {

    const [result, setResult] = useState('')

    const roll = () => {
        return Math.ceil(Math.random() * max)
    }

    const handleClick = (e) => {
        setResult(roll(max))
    }

    return (
        <li className={styles.roll_li}>
            <span>{result}</span>
            <button className={styles.roll_button} onClick={handleClick} value={max}>
                <i className={`fas fa-dice-d20 fa-3x`}>
                </i>1d{max}</button>
        </li>
    )

}

export default RollButton
