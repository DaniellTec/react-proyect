
import React from 'react'
import { TodoItem } from "./TodoItem";

//Se renderiza el componente por cada cambio de estado, useState es un array
//Rfc crea la estructura
export  function TodoList({ todos, toggleTodo }) {

    return (
        
        <React.Fragment>

        <div>
        
        <br />

        {todos.map ((todo) => (
                
                 //Para que tengan una Key propia por cada
            <TodoItem key= {todo.id} todo={todo} toggleTodo = {toggleTodo}/>
        ))}

        </div>

        </React.Fragment>

    );
}
