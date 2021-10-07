import React, { Component } from 'react'
import style from './style.css'; //Importar archivo css 
import { IconName } from "react-icons/bs";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
//import "bootstrap/dist/css/bootstrap.min.css";
//import VisibilityIcon from '@mui/icons-material/Visibility';
//import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default class Button extends Component {

    constructor(){
        //Maneja el ciclo, verdadero o 
        super();
        //Inicaliza la funcion
        this.state = {

            showPassword: false

        }

    }

    //Comparte código con otros componentes
    render() {

        return (


            <div className = "row justify-content-center">



                <input  placeholder="Type..." className= "inputs fields" type= {this.state.showPassword ? "text" : "password" } />
                    
                <center>

                    <br />
                    
                    <button type= "button" class="btn btn-primary" onClick = { () => this.setState ( {showPassword: !this.state.showPassword })}>

                    {/*
                    
                        El icono cambio por cada vez que cambia el estado

                    */}

                   {this.state.showPassword ? <BsFillEyeFill/> : <BsFillEyeSlashFill/>}
                
                    </button>

                </center>

            </div>

        )

    }

}