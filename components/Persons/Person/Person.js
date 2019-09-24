import React, {Component, Fragment} from 'react';
import withClass from '../../../hoc/withClass';
import Auxilary from "../../../hoc/Auxilary";
class Person extends Component{

    render(){
        console.log('[Person.js] render');
        return (
            <Auxilary>
                <p onClick={this.props.click} key='i1'> I am {this.props.name} and I am {this.props.age} years old!</p>
                <p key='i2'>{this.props.children}</p>
                <input key='i3' type="text" onChange={this.props.changed} value={this.props.name}/>
            </Auxilary>
        )
    }
}
export default withClass(Person);
//Add a root elememt and wrap the transcluding element into that root element