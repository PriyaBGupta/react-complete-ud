import React,{ useEffect,useRef } from 'react';
import classes from './Cockpit.module.css';
const Cockpit = (props)=>{
    const toggleBtnRef = useRef(null);
    useEffect(()=>{
        console.log('[[Cockpit.js] useEffect]');
        /*setTimeout(()=>{
            alert('saved data to cloud');

        },1000);*/
        toggleBtnRef.current.click();
        return()=>{
            console.log('[Cockpit] useEffect umount');

        }
    },[]);//if [] then no dependency and hence no repetition of call
    console.log('[Cockpit.js] render');
    let style = classes['blue-button'];
    const assignedClasses =[];
    if(props.personsLength<=2){
        assignedClasses.push(classes['color-green']);
    }
    if(props.personsLength<=1){
        assignedClasses.push(classes.bold);
    }
    if(props.showPerson){
        style = classes['red-button'];
    }
    return(
        <div className={classes.Cockpit}>
            <h1>PI am React App</h1>
            <p className={assignedClasses.join(' ')}>Heyy I am working on classes</p>
            <button ref= {toggleBtnRef} className={style} onClick={props.toggle}>togglePerson</button>
        </div>
    )
}
export default React.memo(Cockpit);