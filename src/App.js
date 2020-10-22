import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:"Alba", age:22},
      {name:"Alberto", age: 33},
      {name:"Berto", age: 44}
    ]
  }

  changeNameHandler = () => {
    this.setState( {
      persons: [
        {name:"Alvaro", age:12},
        {name:"Carla", age: 73},
        {name:"Bart", age: 14}
      ]
    });
  } 

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <div>
          <li>
            World 1
          </li>
          
          <Person name="A1" age="44" />
          <Person name="A2" age="22"> Mis hobbies son pocos</Person>
          <Person name="A3" age="66"/>
          {this.state.persons.map((person, i) => { 
            return <Person name={person.name} age={person.age} />
          } )}
  
          <button onClick={this.changeNameHandler}>Change name</button>
        </div>
      </div>
    );
  }
}

export default App;
