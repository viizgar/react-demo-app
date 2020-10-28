import React from 'react';
import "./Person.css"
const person = (props) => {
return(
     <div className="Person">
     <h2> Hola soy persona Nombre:{props.name} Edad: {props.age}</h2>
     <h3>{props.children}</h3>
     <input type="text" onChange={props.changed} value={props.name} />
     </div>
     )
}

export default person;