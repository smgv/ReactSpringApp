import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.resetCounter = this.resetCounter.bind(this);
    }
    render() {
        return (
            <div className="counter">
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={100} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <br></br>
                <span className="count">{this.state.counter}</span>
                <br></br>
                <button onClick={this.resetCounter} className="reset">Reset</button>
            </div>
        );
    }

    increment(by) {
        console.log("increment from parent method: " + by);
        this.setState({
            counter: this.state.counter + by
        })
    }

    decrement(by) {
        this.setState(
            (prevState) => {
                return { counter: prevState.counter - by }
            })
    }

    resetCounter() {
        this.setState(
            {
                counter : 0
            }
        )
    }

}

// class CounterButton extends Component {
//     //Define the initial state in constructor
//     // state => counter = 0
//     constructor() {
//         super();
//         this.state = {
//             counter: 0
//         }

//         this.increment = this.increment.bind(this);
//         this.decrement = this.decrement.bind(this);
//         // If we use Arrow function we do not need to bind this.
//     }

//     render() {
//         let style = { backgroundColor: "#039b03" }
//         return (
//             <div className="counter">
//                 <button onClick={this.increment} style={style}>+{this.props.by}</button>
//                 <button onClick={this.decrement} style={style}>-{this.props.by}</button>
//             </div>
//         );
//     }

//     increment() {
//         // update state => counter++
//         // console.log('incremented');
//         this.setState({
//             counter: this.state.counter + this.props.by
//         });

//         this.props.incrementMethod(this.props.by);
//     }

//     decrement() {
//         this.setState(
//             (prevState) => {
//                 return { counter: prevState.counter - this.props.by }
//             });

//             this.props.decrementMethod(this.props.by);
//     }

// }



// CounterButton.defaultProps = {
//     by: 1
// }

// CounterButton.propTypes = {
//     by: PropTypes.number
// }

//To remove duplicate methods between Parent and Child We can rewrite the child component as:
class CounterButton extends Component {
    render() {
        let style = { backgroundColor: "#039b03" }
        return (
            <div className="counter">
                <button onClick={() => this.props.incrementMethod(this.props.by)} style={style}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)} style={style}>-{this.props.by}</button>
            </div>
        );
    }
}



