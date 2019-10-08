import React,{Component} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Auxilary from '../hoc/Auxilary';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';
    class App extends Component{
        constructor(props){
            super(props);
            console.log('[App.js] constructor');
        }
        static getDerivedStateFromProps(props,state){
            console.log('[App.js] getDerivedStateFromProps', props);
            return state;
        }
        componentDidMount() {
            console.log('[App.js],componentDidMount ');
        }
        shouldComponentUpdate(nextProps, nextState, nextContext) {
            console.log('[App.js] shouldComponentUpdate');
            return true;
        }
        componentDidUpdate() {
            console.log('[App.js] componentDidUpdate');
        }

        state ={
            persons:[{name:'Priya',age:25,id:'abc'},{name:'Aman',age:25,id:'xyz'},{name:'Vidya',age:30,id:'mno'}],
            showPerson: false,
            showCockpit:true,
            changeCounter: 0,
            authenticated:false
        }
        loginHandler=()=>{
            this.setState({authenticated:true});
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
            console.log('here in name change handler');
        const personIndex = this.state.persons.findIndex(p=>{return p.id===id});
        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;
        const persons =[...this.state.persons];
        persons[personIndex] = person;
        this.setState((prevState,props)=>{
            return ({
                persons:persons,
                changeCounter : prevState.changeCounter+ 1
            }
            )});
    }

    render (){
        console.log('[App.js] render');
        let persons = null;
        if(this.state.showPerson){
            console.log("Is it working");
            persons=<Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangeHandler}
                isAuthenticated={this.state.authenticated}
            />
        }


    return(
        <Auxilary>
            <AuthContext.Provider value={{authenticated:this.state.authenticated,login:this.loginHandler}}>
            <button onClick={()=>{this.setState({showCockpit:false})}}>Remove cockpit</button>
            {this.state.showCockpit?<Cockpit
                personsLength={this.state.persons.length}
                showPerson ={this.state.showPerson}
                toggle ={this.togglePersonHandler}
            />:null}
                {persons}
            </AuthContext.Provider>
        </Auxilary>
    )
    }
}

export default withClass(App,classes.App);
