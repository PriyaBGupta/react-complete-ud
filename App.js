import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
    state ={
        persons:[{
            name:'Priya',
            age :25
        }]
    }
  render(){
    return(
        <div className="App">
          <h1>I am React App</h1>
          <Person age = {this.state.persons[0].age} name ={this.state.persons[0].name}/>

          </div>
    )
  }
}

export default App;
