import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';
    class App extends Component{
    state ={
        persons:[{name:'Priya',age:25},{name:'Aman',age:25},{name:'Vidya',age:30}],
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
        let persons = null;
        if(this.state.showPerson){
            console.log("Is it working");
            persons=(<div>
                {this.state.persons.map(person=>{
                    return <Person name ={person.name} age={person.age}/>
                })}
            </div>)
        }

    return(<div className="App">
        <h1>I am React App</h1>
        <button onClick={this.switchNameHandler.bind(this,'Sourabh')}>change the name</button>
        <button onClick={this.togglePersonHandler}>togglePerson</button>
        {persons}
    </div>)
    }
}


export default App;
