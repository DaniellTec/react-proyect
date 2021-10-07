import React, { useState, useRef }from 'react'
//import { useReducer }from 'react'
//Se importan las librerías de React
//useState permite el cambio de valor

import style from './style.css'; //Importar archivo css 
import "bootstrap/dist/css/bootstrap.min.css";

const Hooks = () => {

    //let counter = 0; En javascript
    //variable y valor
    const [counter, setCounter] = useState(0);

    const [counter1, setCounter1] = useState(0);

    const [inputValue, setInputValue] = useState("Write Someting And See How Does It Change");

        // Cambio de estado => Evento

        let onChange = (event) => {

            //Cambio que se realice se muestra en la variable

            const newValue = event.target.value;
            //Hace referencia a un objeto que ha lanzado un evento
            setInputValue(newValue);
            //Poner el valor de la variable

        };

    // La variable y el estado

    //En jsx

    const major = () => {

        //counter = counter +1;

        //Funcion añade el valor a la variable 

        setCounter(counter + 1);

        //La variable mas el valor

    }

    const minor = () => {

        //counter = counter +1;

        //Funcion añade el valor a la variable 

        setCounter1(counter1 - 1);

        //La variable mas el valor

    }

    const inputRef = useRef(null);
    //Null no hay valor

    const onClick = () => {

        inputRef.current.value = "";
        //Se borra el valor
        //inputRef.current.focus();
        //Se centra en este valor
        //console.log(inputRef.current.value)
        //Se muestra el valor por consola, se verifica el input
        //Input actual

    }

    //const StateTest = () => {

    //   const [inputValue, setInputValue] = useState("Hi, ")

    //}

   // const [ count, setCount ] = useState(0);
    //Variable y valor
   // const [ showText, setShowText ] = useState(true);
    //Si se hace click (Se hace la función)

    return (
        
        <React.Fragment>

        <div className="card container">

            <br />
        
            <div>

                <h1> useState: </h1>

                <br />

                <h2> - Increase: </h2>

                {counter} &nbsp;&nbsp;

                <button class="btn btn-primary" onClick = {major}> +1 </button>

            </div>

            <br></br> 

            <div>

                <h2> - Decrease:  </h2>

                {counter1} &nbsp;&nbsp;

                <button class="btn btn-primary" onClick = {minor}> -1 </button>

            </div>

            <hr />

            <br></br>

            <div>

            <h1> Status Change:  </h1>

             <p>(Los cambios que se realicen se mostrarán)</p>

                <input className="inputs fields" type="text" placeholder = "Enter something..." onChange = {onChange} />
                &nbsp;&nbsp;  Hi,   &nbsp;
                {inputValue}

            </div>

            <hr />

            <div>

            <br />

            <h1>Ref: </h1>

            <input className="inputs fields" type="text" placeholder="Type..." ref = {inputRef} />
                &nbsp;&nbsp;
            <button class="btn btn-primary" onClick = {onClick}> Change Name </button>

            </div>

            <br></br>

            <hr />

        </div>    

        </React.Fragment>    

    );

}

export default Hooks