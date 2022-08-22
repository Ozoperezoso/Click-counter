import react from 'react';
import '../stylesheets/clickCounter.css'

function ClickCounter ({ clickNumber }) {
  return(
  <div className='clickCounter'>
    {clickNumber}
  </div>
  );
}

export default ClickCounter