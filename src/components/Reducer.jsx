import React, { useState }from 'react'
//import { useReducer }from 'react'

const ReducerTest = () => {

    const [ count1, setcount1 ] = useState(0);

    const [ showText, setShowText ] = useState(true);

    return (
        
    <div>

        <h1>Reducer</h1>

        <h2> {count1} </h2>

        <button onClick = { () => {

            setcount1(count1 + 1 );

            setShowText(!showText);

            }}>  Click Here

        </button>

        {showText && <p>Text</p>}

    </div>

    );

};

export default ReducerTest;