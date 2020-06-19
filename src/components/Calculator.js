import React, { Component } from 'react'
import CalculatorDisplay from './CalculatorDisplay'
import NumberPad from './NumberPad'
import './Calculator.css'

export class Calculator extends Component {
    state = {
        text: ''
    }
    setDisplayText = (character) => {
        if (character === '=') {
            // eslint-disable-next-line
            let result = eval(this.state.text);
            this.setState({ text: result });

        } else {

            const currentDisplayText = this.state.text;
            this.setState({ text: currentDisplayText + character });
        }
    }

    render() {
        return (
            <div>
                <CalculatorDisplay displayText={this.state.text} />
                <NumberPad handleClick={this.setDisplayText} />

            </div>
        )
    }
}

export default Calculator
