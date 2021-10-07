//import React, { useState}from 'react'
import React, { useEffect, useLayoutEffect, useReducer, useRef, useState} from 'react'
import style from './style.css'; //Importar archivo css 
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login"
import User from "./User"
   
    //Permite crear referencias a un objeto
    //import { useReducer }from 'react'
    //Se importan las librerías de React
    //useState permite el cambio de valor

function HooksTest() {
    
   // const inputRef = useRef(null);

    //const inputRef2 = useRef(null);
    //Null no hay valor

    const onClick = () => {

        //inputRef.current.value = "";
        //Se borra el valor
        //inputRef.current.focus();
        //Se centra en este valor
        console.log(inputRef.current.value)
        //Se muestra el valor por consola, se verifica el input
        //Input actual
        
    }

    const inputRef = useRef(null);

        useLayoutEffect (() => {

        console.log(inputRef.current.value);
        //Se muestra el valor en consola

    }, []);

    useEffect(() => {

        inputRef.current.value = "HELLO";
        //valor actual

    }, []);

    const [ count, setCount ] = useState(0);

    const [ showText, setShowText ] = useState(true);

    const [ count1, setcount1 ] = useState(0);

    const [ username, setUsername ] = useState("");

   // const [ showText1, setShowText1 ] = useState(true);


    return (
                    
        <React.Fragment>

         {/*   <div>

            <h1>Ref: </h1>

            <input type="text" placeholder="Type..." ref = {inputRef} />

            <button onClick = {onClick}> Change Name </button>

            </div>

            <hr />

            <br></br>

          */}

        <div className="card container">  

            <h1>Reducer</h1>

            <h2> {count1} </h2>

            <button type="button" class="btn btn-primary" onClick = { () => {

                setcount1(count1 + 1 );

                setShowText(!showText);

                }}>  Click Here

            </button>

            {showText && <p>Text</p>}

            <br /><hr /> 

            <div>

            <br />

                <input className="inputs fields" type="text" ref = {inputRef} value = "MEH" />

                {/*
                    
                    Al escribir se cambia
                    
                */}

                <p>Try To Type Something</p>

            </div>   

            <hr /> 

            <div>

                <Login setUsername = {setUsername} /> <User username = {username}/>
                
                {/*
                
                    Login, se selecciona la variable de cambio
                    User, se coge la variable como función

                */}

            </div>

            <div style={{

                borderBottom: 'solid #C8C8C8 2px',
                paddingBottom: '8px'

                }}>

            </div>

            <div className="borderTest">


            </div>

        </div>    
                
        </React.Fragment>    

);

}

export default HooksTest