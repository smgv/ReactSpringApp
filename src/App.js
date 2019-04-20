import React, { Component } from 'react';
import FirstComponent, { SecondComponent } from './components/learning-components/firstcomponent'
import logo from './logo.svg';
import './App.css';

// JSX use Babel to compile it into next gen JS
// Component Element should start with capital letter
// it should have valid close of tag
// All element should be wrapped in one parent element than only babel works
// To use JSX we should import React
class App extends Component {
  render() {
    return (
      <div className="App">
        My Hello World
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}

function ThirdComponent() {
  return (
    <div>
      ThirdComponent
    </div>
  );
}

export default App;
