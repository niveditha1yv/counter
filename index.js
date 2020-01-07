import React, { Component } from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import Divider from './Divider'
import './style.css';

class App extends React.Component{
  render(){
    return(
      <>
      <Counter />
      <Divider/>
      <Counter />
      
      </>
    )
  }
}

render(<App />, document.getElementById('root'));
