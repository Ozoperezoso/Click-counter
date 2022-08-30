import './App.css';
import Button from './Components/button';
import ClickCounter from './Components/clickCounter';
import santa  from './images/santa.png';
import React from 'react';
// import React, { setState } from 'react';

class App extends React.Component{
  constructor() {
    super();
    this.state =  {clickNumber: 0 };

    this.counterReset = this.counterReset.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.minusClickHandler = this.minusClickHandler.bind(this);
  }

  counterReset(){
    this.setState({clickNumber:0});
  }

  clickHandler(){
    this.setState(({ clickNumber }) => ({ clickNumber: clickNumber + 1 }));
  }

  minusClickHandler(){
    this.setState(({ clickNumber }) => ({ clickNumber: clickNumber - 1}));
  }

  render() {
    return (
      <div className="App">
        <div className='freecodecamp-logo-container'>
          <img 
          className='logo'
          src={santa}
          alt='AppLogo' />
        </div>
        <div className='main-container'>
          <ClickCounter
            clickNumber= {this.state.clickNumber}  />
          <Button
            text ="click"
            isClickButton={true}
            clickHandler={this.clickHandler} />
  
          <Button
            text ="Reset"
            isClickButton={false}
            clickHandler={this.counterReset} />
  
          <Button
            text ="-Click"
            isClickButton={true}
            clickHandler={this.minusClickHandler} />
        </div>
      </div>
    );
  }
}


// function App() {

//   const [clickNumber, setClickNumber] = setState(0);

//   const clickHandler = () => {
//     setClickNumber (clickNumber +1);
//   }

//   const counterReset = () => {
//     setClickNumber (0);
//   }
//   const minusClickHandler = () => {
//     setClickNumber (clickNumber -1);
//   }

//   return (
//     <div className="App">
//       <div className='freecodecamp-logo-container'>
//         <img 
//         className='logo'
//         src={santa}
//         alt='AppLogo' />
//       </div>
//       <div className='main-container'>
//         <ClickCounter
//           clickNumber= {clickNumber}  />
//         <Button
//           text ="click"
//           isClickButton={true}
//           clickHandler={clickHandler} />

//         <Button
//           text ="Reset"
//           isClickButton={false}
//           clickHandler={counterReset} />

//         <Button
//           text ="-Click"
//           isClickButton={true}
//           clickHandler={minusClickHandler} />
//       </div>
//     </div>
//   );
// }

export default App;
