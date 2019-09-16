import React,{ useEffect } from 'react';
import classes from './Cockpit.module.css';
const Cockpit = (props)=>{
    useEffect(()=>{
        console.log('[[Cockpit.js] useEffect]')
    });
    console.log('[Cockpit.js] render');
    let style = classes['blue-button'];
    const assignedClasses =[];
    if(props.persons.length<=2){
        assignedClasses.push(classes['color-green']);
    }
    if(props.persons.length<=1){
        assignedClasses.push(classes.bold);
    }
    if(props.showPerson){
        style = classes['red-button'];
    }
    return(
        <div className={classes.Cockpit}>
            <h1>PI am React App</h1>
            <p className={assignedClasses.join(' ')}>Heyy I am working on classes</p>
            <button className={style} onClick={props.toggle}>togglePerson</button>
        </div>
    )
}
export default Cockpit;