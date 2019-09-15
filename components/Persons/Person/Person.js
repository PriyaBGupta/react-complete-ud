import React from 'react';
const person = (props) =>{
    console.log('[Person.js] render');
    return (<div>
        <p onClick={props.click}> I am {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>)
}
export default person;
//Add a root elememt and wrap the transcluding element into that root element