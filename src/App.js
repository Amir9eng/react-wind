import React, { useState } from 'react';


export default () => {
    const [color, changeColor] = useState('rgb(0,0,0)');

    const Rand = (min, max) => {
        let randomNumber = (Math.random() * max) + min;
        return Math.floor(randomNumber);
    }

    return (
        <div className="App" onMouseLeave={() => changeColor(`rgb(${Rand(0, 255)},${Rand(0, 255)},${Rand(0, 255)})`)} style={{
            width: '10rem',
            height: '10rem',
            backgroundColor: color,
            margin: '1rem auto',
            borderRadius: '.5rem'
        }}>
        </div>
    )
}




