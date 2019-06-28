import React, {Component} from 'react';

import CalcButtons from './CalcButtons';

class App extends Component {

  onButtonClick = (button) => {
    console.log(button);
  }

  render() {
    return (
      <div id="calculator">
        {this.props.calcButtonsObj.map((button) => 
          <CalcButtons
            {...button} // Spread operator that maps all object keys to the same variable. Replaces the commented out lines below
            key={button.buttonText}
            onButtonClick={this.onButtonClick}
          >
          </CalcButtons>
        )}
        
      </div>
    )
  }
}

export default App;
