import React from 'react';
import style from './style.css'; //Importar archivo css 
import "bootstrap/dist/css/bootstrap.min.css";
import Button from './Button';

function Password () {

    return (

        <div className="card">

        <div className="container"> 

        <header>

            <h1 className="text/center h1center"></h1>

            <center>

                &lt;[ Show &amp; Hide ]&gt;

         

            <br /> <br />

            <Button> </Button>

            <br />

            {/*

                <button type= "button" class="btn btn-primary" onClick = { () => this.setState ( {} ) }>

                Show

                </button>

            */}   

            </center>

            <br />

               {/*

            <section>

                <div className = "row justify-content-center">

                    <input type="text" placeholder="Type..." className= "inputs fields" />

                </div>

            </section>

            <br />

            <button>

                    Show

                </button>
              

            </h1>

              */} 

        </header>

        </div>

        </div>

    )

}

export default Password;