import React, { useState, Fragment, useRef, useEffect } from 'react';
//Genera ID, permite usar el storage para que se mantengan los datos al actualizar
import { v4 as uuidv4 } from "uuid";
//useState para estados, fragment para no tener que usar div o React.element
import {TodoList} from './TodoList';
import "bootstrap/dist/css/bootstrap.min.css";
import { BsPlusLg, BsTrashFill } from "react-icons/bs";
//Constante como clave
const KEY = "todoApp.todos";

export function Test() {
    //El estado, lo que lo modifica
    const [todos, setTodos] = useState([

        {id: 1, task: 'Tarea 1', completed: false},

    ]);

    //Hace referencia al elemento
    const todoTaskRef = useRef();

    
     //Si hay algo almacenado, si es válido, que se muestren
     useEffect(( ) => { 
         
        const storedTodos = JSON.parse(localStorage.getItem(KEY));
        if(storedTodos) {

            setTodos(storedTodos);

        }

     }, [])  
      //Pasa el array a un string
     useEffect(( ) => { 
        localStorage.setItem(KEY, JSON.stringify(todos));
     }, [todos]);

    //Función toggle, copia de los todos, recibe la ID del todo
    const toggleTodo = (id) => {

        const newTodos = [...todos];
        //Hace una copia del array
        //Para que encuentre la id que le estamos pasando, se busca la id
        // y se modifica
        const todo = newTodos.find((todo) => todo.id === id );
        //False true
        todo.completed = !todo.completed;
        setTodos(newTodos);
    
    }

    const handleTodoAdd = () =>

    {

        const task = todoTaskRef.current.value;
        //Si no hay valores no se devuelve nada
        if (task === "" ) return;
        //Copia del anterior estado, así lo vevuelve
        setTodos((prevTodos) => {
                //Se agrega las IDs
            return [...prevTodos, {id : uuidv4() , task, completed: false}];

        });

        todoTaskRef.current.value = null;

    };
    //Hace una copia del array, lo filtra, va a tener todos los objetos, los que 
    //se filtran se borran
    const handleClearAll = () => {

        const newTodos = todos.filter((todo) => !todo.completed)
        setTodos(newTodos);
    }

    return (

        <Fragment>

        <div className="card1">

            <br />

            <center>

        <input className= "inputs fields" ref={todoTaskRef} type = "text" placeholder = "Inserte Una Nueva Tarea"/>

        &nbsp;

        <button class="btn btn-primary" onClick = {handleTodoAdd}><BsPlusLg/></button>

        &nbsp;

        <button class="btn btn-primary" onClick = {handleClearAll}><BsTrashFill/></button>
        
        <TodoList todos = {todos} toggleTodo = {toggleTodo}/>

        <br />

        <div> Te Quedan {todos.filter((todo) => !todo.completed).length } Tareas Por Hacer </div>

        <br />

        </center>

        </div>

        </Fragment>

        );
        // <div>Hi</div>;

}

export default Test;