import React, {Component, Fragment} from 'react';
import withClass from '../../../hoc/withClass';
import Auxilary from '../../../hoc/Auxilary';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';
class Person extends Component{
    constructor(props){
        super(props);
        this.inputElement = React.createRef();
    }
    static contextType= AuthContext;
    componentDidMount() {
        this.inputElement.current.focus();
        console.log(this.context.authenticated);
    }

    render(){
        return (
            <Auxilary>
                <AuthContext.Consumer>
                    {context => context.authenticated?<p>Authenticated!</p>:<p>Please login</p>}
                </AuthContext.Consumer>
                <p onClick={this.props.click} key='i1'> I am {this.props.name} and I am {this.props.age} years old!</p>
                <p key='i2'>{this.props.children}</p>
                <input key='i3' type="text" onChange={this.props.changed} value={this.props.name}
                ref={this.inputElement}/>
            </Auxilary>
        )
    }
}
Person.propTypes={
    click:PropTypes.func,
    age:PropTypes.number,
    name:PropTypes.string,
    changed:PropTypes.func
}
export default withClass(Person);
//Add a root elememt and wrap the transcluding element into that root element