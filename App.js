import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';
    class App extends Component{
    state ={
        persons:[{name:'Priya',age:25}],
        showPerson: false
    }
    switchNameHandler = (newName) =>{
        console.log(newName);
        this.setState({persons:[{name:newName,age:25}]});
    }
    togglePersonHandler = () =>{
        const  doesShow = this.state.showPerson;
        this.setState({showPerson:!doesShow});
    }
    render (){
    return(<div className="App">
        <h1>I am React App</h1>
        <button onClick={this.switchNameHandler.bind(this,'Sourabh')}>change the name</button>
        <button onClick={this.togglePersonHandler}>togglePerson</button>
        {this.state.showPerson?
            <Person age = {this.state.persons[0].age} name ={this.state.persons[0].name}/>:null
        }
    </div>)
    }
}


export default App;
