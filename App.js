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
    switchNameHandler=()=>{
        this.setState({persons:[{name:'Aman',age:25}]});
    }
  render(){
    return(
        <div className="App">
          <h1>I am React App</h1>
            <button onClick = {this.switchNameHandler}>switch name</button>
          <Person age = {this.state.persons[0].age} name ={this.state.persons[0].name}/>

          </div>
    )
  }
}

export default App;
