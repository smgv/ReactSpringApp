import React, { Component } from 'react';

// class component
export default class FirstComponent extends Component {
    render() {
        return (
            <div className="firstComponent">
                FirstComponent
        </div>
        );
    }
}

export class SecondComponent extends Component {
    render() {
        return (
            <div>
                SecondComponent
        </div>
        );
    }
}