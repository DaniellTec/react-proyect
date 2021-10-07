
import React from 'react';
import style from './style.css'; //Importar archivo css 
//import style from './style'; //Importar archivo js
//import { css } from 'aphrodite';

const Inputs = () => {
  return (

    <React.Fragment>

    <div className="card container">

      <h1> Inputs </h1>

      <h1 className="style"> Probando CSS En React </h1>

      <p className="textBlue"> CSS Interno </p>

      <input type="text" placeholder="Type..." style={{

        color: 'blue',

        padding: '2rem',

        fontSize: '1rem' //font-size => fontSize
      
      }}/>

      <br/> <br/>

      <p className="textRed"> CSS Externo </p>

      <input type="text" placeholder="Type..." className= "borderCyan" //class => className, lo confunde con javascript
      
      />

      <br/> <br/>

      <p className="textPurple"> CSS Externo por JS </p>

      <input type="text" placeholder="Type..." className= {style.input} //class => className, lo confunde con javascript
      />

      <br /> <br />

    </div>

    </React.Fragment>  

  );

}

export default Inputs;
