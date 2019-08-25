import React,{useState} from 'react';
import './App.css';
import Person from './Person/Person';

const App = props =>{
    const [personState,setPersonSate] = useState({persons:[{name:'Priya',age:25}]});
    const [otherState,setOtherState] = useState('some other value');
    const switchNameHandler = () =>{
        setPersonSate({persons:[{name:'Aman',age:25}]});
    }

    return (<div className="App">
          <h1>I am React App</h1>
            <button onClick = {switchNameHandler}>switch name</button>
          <Person age = {personState.persons[0].age} name ={personState.persons[0].name}/>
        </div>)
  }

export default App;
