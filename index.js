import React, { Component } from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import './style.css';

class App extends React.Component{
  render(){
    return(
      <>
      <Counter />
      </>
    )
  }
}

render(<App />, document.getElementById('root'));
