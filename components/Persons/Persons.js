import React,{Component} from 'react';
import Person from './Person/Person'
class Persons extends Component{
    static getDerivedStateFromProps(props,state){
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {

        if(nextProps.persons !== this.props.persons){
            console.log('[Persons.js] shouldComponentUpdate true');
            return true;
        }else{
            console.log('[Persons.js] shouldComponentUpdate false');
            return false;
        }

    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return null;
    }
    componentDidUpdate() {
        console.log('[Persons.js] componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render(){
        console.log('[Persons.js] render');
       return(this.props.persons.map((person,index)=>{
            return(<Person
        name ={person.name}
        age={person.age}
        click ={()=>this.props.clicked(index)}
        changed = {(event)=> this.props.changed(event,person.id)}
        key={person.id}/>)
    }));
   }
}
export default Persons;