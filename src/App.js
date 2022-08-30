import React from 'react';
import './App.css';

class App extends React.Component 
{
  constructor(){

    super();

    this.state={
      cardOne: false,
      cardTwo: false
    }
  }

  render() {

  return (
// heading 
   <div className='Body'>
    <div className='headingOne'>
    <h1> Styling using Functional and Class Component </h1>
{/* first button terneary operator */}
    {
      this.state.cardOne?  
      <div style={{backgroundColor: 'orange'}} className='BoxOne'>
      <ul>
      <li><h1>This is craeted susing functional component</h1></li>
      <li><h4>This is done external CSS</h4></li>
      <li><h4 style={{color: 'red'}}>This is done using inline CSS</h4></li>
      </ul>
    </div>
      :null
    }
    
    <button className='buttonOne' onClick={() => {this.setState({cardOne: !this.state.cardOne })}}> To see Styling in function Component </button>
    
  {/* second button   terneary operator  */}
    {
      this.state.cardTwo?  
      <div style={{backgroundColor: 'pink'}} className='BoxTwo'>
      <ul typeof='none'>
      <li><h1>This is craeted susing functional component</h1></li>
      <li><h4>This is done external CSS</h4></li>
      <li><h4 style={{color: 'red'}}>This is done using inline CSS</h4></li>
      </ul>
    </div>
    :null
    }

    <button className='buttonTwo' onClick={()=> {this.setState({cardTwo: !this.state.cardTwo })}}> To see Styling in function Component </button> 
    </div>

    {/* <div className='block'> */}

    {/* </div> */}

   </div>
  );
}

}

export default App;
