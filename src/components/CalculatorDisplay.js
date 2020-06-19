import React, { Component } from 'react'

export class CalculatorDisplay extends Component {
    render() {
        return (
            <div style={displayStyles} >
                {this.props.displayText}

            </div>
        )
    }


}

const displayStyles = {

    background: '#f4f4f4',
    minHeight: '50px',
    marginBottom: '20px',
    padding: '10px',
    fontSize: '30px',
    fontWeight: '900',


}

export default CalculatorDisplay