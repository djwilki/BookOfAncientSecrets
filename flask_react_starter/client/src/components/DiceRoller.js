import React, {useState} from 'react'
import RollButton from '../components/RollButton'


function DiceRoller(props) {

    const dice = [20, 12, 10, 8, 6, 4, 3, 2]

    return (
        <ul>
            {dice.map(ele=> <RollButton max={ele}/>)}
        </ul>
    )
}

export default DiceRoller
