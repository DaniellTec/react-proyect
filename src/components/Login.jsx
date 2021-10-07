import React from 'react';

function Login({ setUsername }) {

    return (

        <div>

            <input onChange = { (event) => {

                setUsername(event.target.value);

                {/*
                
                    Evento on change, selecciona una variable de otro componente, al cambio se registra

                */}

            }}/>

        </div>

    );

}

export default Login;