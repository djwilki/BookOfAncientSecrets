import React, {useState} from 'react';

function RollButton ({max}) {

    const [result, setResult] = useState('')

    const roll = () =>{
        return Math.ceil(Math.random() * max)
    }

    const handleClick = (e) => {
        setResult(roll(max))
    }

    return(
        <li>{result}<button onClick={handleClick} value={max}>1d{max}</button></li>
    )

}

export default RollButton
