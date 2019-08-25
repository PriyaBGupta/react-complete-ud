import React,{useState} from 'react';
import './App.css';
import Person from './Person/Person';

const App = props =>{
    const [personState,setPersonSate] = useState({persons:[{name:'Priya',age:25}]});
    const [otherState,setOtherState] = useState('some other value');
    const switchNameHandler = (newName) =>{
        setPersonSate({persons:[{name:newName,age:25}]});
    }

    return (<div className="App">
          <h1>I am React App</h1>
            <button onClick = {switchNameHandler}>switch name</button>
          <Person age = {personState.persons[0].age} name ={personState.persons[0].name} click={switchNameHandler.bind(this,'Sourabh')}/>
        </div>)
  }

export default App;
