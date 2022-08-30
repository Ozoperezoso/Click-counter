import React from 'react';
import react from 'react';
import '../stylesheets/clickCounter.css'

class ClickCounter extends React.Component{
  render(){
    return(
      <div className='clickCounter'>
        {this.props.clickNumber}
      </div>
      );
  }

}

export default ClickCounter

//  functional component
// function ClickCounter ({ clickNumber }) {
//   return(
//   <div className='clickCounter'>
//     {clickNumber}
//   </div>
//   );
// }

