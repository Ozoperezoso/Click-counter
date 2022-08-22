import './App.css';
import Button from './Components/button';
import ClickCounter from './Components/clickCounter';
import santa  from './images/santa.png';
import { useState } from 'react';


function App() {

  const [clickNumber, setClickNumber] = useState(0);

  const clickHandler = () => {
    setClickNumber (clickNumber +1);
  }

  const counterReset = () => {
    setClickNumber (0);
  }
  const minusClickHandler = () => {
    setClickNumber (clickNumber -1);
  }

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
          clickNumber= {clickNumber}  />
        <Button
          text ="click"
          isClickButton={true}
          clickHandler={clickHandler} />

        <Button
          text ="Reset"
          isClickButton={false}
          clickHandler={counterReset} />

        <Button
          text ="-Click"
          isClickButton={true}
          clickHandler={minusClickHandler} />
      </div>
    </div>
  );
}

export default App;
