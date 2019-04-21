import React, { Component } from 'react';
import FirstComponent, { SecondComponent, ThirdComponent } from './components/learning-components/firstcomponent'
import Counter from './components/counters/Counter';
import Parent from './components/examples/Test';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <LearningComponents></LearningComponents> */}
        {/* <Counter></Counter> */}
        {/* <Parent></Parent> */}
      </div>
    );
  }
}

class LearningComponents extends Component {
  render() {
    return (
      <div className="LearningComponents">
        My Hello World
      <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}


export default App;
