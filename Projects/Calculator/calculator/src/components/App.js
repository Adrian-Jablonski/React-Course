import React from 'react';

import CalcButtons from './CalcButtons';

const App = (props) => {
  return (
    <div id="calculator">
      {props.calcButtonsObj.map((button) => 
        <CalcButtons
          {...button} // Spread operator that maps all object keys to the same variable. Replaces the commented out lines below
          key={button.buttonText}
        >
        </CalcButtons>
      )}
      
    </div>
  )
}

export default App;
