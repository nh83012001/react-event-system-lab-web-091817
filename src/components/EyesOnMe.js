// Code EyesOnMe Component Here
import React from 'react';
import ReactDOM from 'react-dom';

class EyesOnMe extends React.Component {

    good = () => {
   console.log('Good!');
    }

    bad = () => {
   console.log('Hey! Eyes on me!');
    }

  render(){
    return(
    <button onBlur={this.bad} onFocus={this.good}>wazzup </button>
  )
  }
}


export default EyesOnMe;
