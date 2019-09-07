import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';
import Radium,{StyleRoot} from 'radium';
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
        const style ={
            backgroundColor:'blue',
            fontSize:'20px',
            ':hover':{
                backgroundColor: 'lightblue'
            }
        }
        let persons = null;
        if(this.state.showPerson){
            console.log("Is it working");
            persons=(<div>
                {this.state.persons.map((person,index)=>{
                    return <Person
                        name ={person.name}
                        age={person.age}
                        click ={()=>this.deletePersonHandler(index)}
                        changed = {(event)=>this.nameChangeHandler(event,person.id)}
                        key={person.id}/>
                })}
            </div>)
            style.backgroundColor='red';
            style[':hover']={
                backgroundColor: 'salmon'
            }

        }
        const classes =[];
        if(this.state.persons.length<=2){
            classes.push('color-green');
        }
        if(this.state.persons.length<=1){
            classes.push('bold');
        }

    return(
        <StyleRoot>
            <div className="App">
                <h1>I am React App</h1>
                <p className={classes.join(' ')}>Heyy I am working on classes</p>
                <button style ={style} onClick={this.togglePersonHandler}>togglePerson</button>
                {persons}
            </div>
        </StyleRoot>)
    }
}


export default Radium(App);
