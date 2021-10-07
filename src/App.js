import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
//Importa las librerías de bootstrap
import React from 'react';
//import style from './style.css'; //Importar archivo css 
//import style from './style'; //Importar archivo js
//import { css } from 'aphrodite';
import { BrowserRouter as Router,
  Switch, 
  Route, 
  Link, 
  NavLink } from "react-router-dom";

//Importar librerías
import Inicio from './components/Inicio';
import Inputs from './components/Inputs';
import Hooks from './components/Hooks';
import HooksTest from './components/HooksTest';
//import Reducer from './components/Reducer';
//import TodoList from './components/TodoList';
//import TodoItem from './components/TodoItem';
import Password from './components/Password';
import Test from './components/Test';

function App() {

  return (
//Router para especificar las rutas //Switch para hacer las rutas dinámicas //Route se especifica las rutas //Link para poner los enlaces y el nombre
//NavLink permite usar clases activas

      <Router> 

        <div className="container mt-5">

          <div className= "btn-group">
            
            <Link to = "/" className = "btn btn-dark">
              Inicio
            </Link>   

            <Link to = "/Inputs" className = "btn btn-dark">
            Inputs
            </Link>  

            <Link to = "/Hooks" className = "btn btn-dark">
            Hooks
            </Link>  

            <Link to = "/HooksTest" className = "btn btn-dark">
            HooksTest
            </Link> 

            <Link to = "/Password" className = "btn btn-dark">
            Password
            </Link> 

            <Link to = "/Test" className = "btn btn-dark">
            Test
            </Link> 

          </div>

          <br/> <br/>
            
          <Switch> 

            <Route path = "/" exact>
              <Inicio/>
            </Route>

            <Route path = "/inputs">
              <Inputs/>
            </Route>

            <Route path = "/hooks">
              <Hooks/>
            </Route>

            <Route path = "/HooksTest">
              <HooksTest/>
            </Route>

            <Route path = "/Password">
              <Password/>
            </Route>

            <Route path = "/Test">
              <Test/>
            </Route>

          </Switch>  

      </div>

      </Router>

  );

}

export default App;
