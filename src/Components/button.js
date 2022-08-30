import React from 'react';
import react from 'react';
import '../stylesheets/Button.css'

class Button extends React.Component{
  render(){
    return (
      <button
        className={ this.props.isClickButton ? 'click-button' : 'reset-button' }
        onClick ={this.props.clickHandler}>
        {this.props.text}
      </button>
    );


  }
}

// function Button ({ text, isClickButton, clickHandler }){
//     return (
//       <button
//         className={ isClickButton ? 'click-button' : 'reset-button' }
//         onClick ={clickHandler}>
//         {text}
//       </button>
//     );
// }

export default Button;