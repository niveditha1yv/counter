import React from 'react';

class Counter extends React.Component{
  constructor(){
    super();
    this.state = { count: 1}
  }

increment = () =>{
  const {count}  = this.state;
  console.log(count)
  this.setState({count: count+1});
  
}
decrement = () =>{
  const {count} = this.state;
  if( count <= 0){
    this.setState({count:0})
  }else{
     this.setState({count: count-1});
  }
}

render(){
  return(
    <>
    <div> Counter:{this.state.count} </div>
    <button onClick={this.increment}>increment</button>
    <button onClick={this.decrement}>decrement</button>
    </>
  )
}
}

export default Counter;
