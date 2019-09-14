import React,{Component} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

    class App extends Component{
    state ={
        persons:[{name:'Priya',age:25,id:'abc'},{name:'Aman',age:25,id:'xyz'},{name:'Vidya',age:30,id:'mno'}],
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
    deletePersonHandler = personIndex =>{
        const persons = [...this.state.persons];
        persons.splice(personIndex,1);
        this.setState({persons:persons})
    }
    nameChangeHandler =(event,id)=>{
        const personIndex = this.state.persons.findIndex(p=>{return p.id===id});
        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;
        const persons =[...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons:persons});
    }

    render (){

        let persons = null;
        if(this.state.showPerson){
            console.log("Is it working");
            persons=<Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangeHandler}
            />


        }


    return(
        <div className={classes.App}>
            <Cockpit
                persons={this.state.persons}
                showPerson ={this.state.showPerson}
                toggle ={this.togglePersonHandler}/>
            {persons}
        </div>)
    }
}

export default App;
