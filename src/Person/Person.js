import React from 'react';

const person = (props) => {
return(
     <div>
     <h2> Hola soy persona Nombre:{props.name} Edad: {props.age}</h2>
     <h3>{props.children}</h3>
     </div>
     )
}

export default person;