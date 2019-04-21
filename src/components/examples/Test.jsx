import React, {Component} from 'react';

export default class Parent extends Component {
    constructor() {
        super();
        this.state = ({
            details: ' '
        })

        this.getName = this.getName.bind(this);

    }
    render() {
        return (
            <div className="parent">
                <h1>Full Details</h1>
                <p>{this.state.details}</p>
                <Child age={22} name={'Ganesh'} getDetails={this.getName}></Child>
            </div>
        );
    }

    getName(name, age) {
        console.log("From parent " + name + " " + age);
        this.setState({
            details: 'My Name is ' + name + " And i am " + age + "year old"
        })
    }
}

class Child extends Component {
    constructor() {
        super()
        this.state = ({
            name:' '
        })

        this.getName = this.getName.bind(this);
    }
    render() {
        return (
            <div className="child">
               <button onClick={this.getName}>Click Me</button>
            </div>
        );
    }

    getName() {
        this.setState({
            name: 'Name is ' + this.props.name + ' and Age is ' + this.props.age
        })
    
        this.props.getDetails(this.props.name, this.props.age)
    }
}