import React, {Component} from 'react';

import CalcButtons from './CalcButtons';
import CalcAnswerInput from './CalcAnswerInput';
import CalcInput from './CalcInput';

class App extends Component {

  state = {
    answer: 0,
    input: 0
  }

  onButtonClick = (button) => {
    const {buttonText, className} = button;
    switch (className.split(" ")[0]) {
      case 'numeric-button':
        this.addNumberToInput(buttonText)
        break;
      case 'operator-button':
        this.performOperation(buttonText);
        break;
      case 'action-button':
        this.performAction(buttonText);
        break;
      default:
        break;
    }
  }

  addNumberToInput(numb) {
    this.setState(prevState => {
      let ans = (prevState.answer === 0) ? numb : prevState.answer + numb;
      return {
        answer: ans,
        input: ans
      }
    })
  }

  performOperation(operator) {
    this.setState(prevState => { 
      let inputLen = prevState.input.length;
      let lastInput = prevState.input.substring(inputLen - 1);
      let isOperator = (lastInput === '+' || lastInput === '-' || lastInput === '/' || lastInput === "*");
      let ans = (isOperator) ? prevState.input.substring(0, inputLen - 1) + operator : prevState.input + operator;
      return {
        answer: ans,
        input: ans
      }
    })
  }

  performAction(action) {
    this.setState(prevState => { 
      let ans;
      let inputLen = prevState.input.length;
      console.log(inputLen)
      if (action === "Back" && inputLen > 1) {
        console.log(prevState.input)
        ans = prevState.input.substring(0, inputLen - 1);
        console.log(ans);
      }
      else if (action === "Clear") {
        ans = 0;
      }
      else {
        ans = 0;
      }
      return {
        answer: ans,
        input: ans
      }
    })
  }

  render() {
    return (
      <div id="calculator">
        <CalcInput
          input={this.state.input}
        ></CalcInput>
        <CalcAnswerInput
          answer={this.state.answer}
        ></CalcAnswerInput>
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
