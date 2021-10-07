import React from "react";

//
export function TodoItem({todo, toggleTodo}) {
    
      //Estados de la variable
      const {id , task , completed} = todo;
            //Pasa la ID como argumento
            const handleTodoClick = () => {

                  toggleTodo(id);

            };

            //Se agrega una checkbox
            //Espera a que haya un cambio, se agrega la propiedad de check, completed
            return <li> <input type = "checkbox" checked = {completed} onChange = {handleTodoClick} /> {task} </li>;
    
}
