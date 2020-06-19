import React, { Component } from 'react'
import './NumberPad.css'

export class NumberPad extends Component {
    render() {
        return (<div>
            <div className="Row">
                <button className="Btn" onClick={this.props.handleClick.bind(this, '7')}>7</button>
                <button className="Btn" onClick={this.props.handleClick.bind(this, '8')}>8</button>
                <button className="Btn" onClick={this.props.handleClick.bind(this, '9')}>9</button>
                <button className="Btn" onClick={this.props.handleClick.bind(this, '/')}>/</button>

            </div>
            <div className="Row">
                <button className="Btn" onClick={this.props.handleClick.bind(this, '4')}>4</button>
                <button className="Btn" onClick={this.props.handleClick.bind(this, '5')}>5</button>
                <button className="Btn" onClick={this.props.handleClick.bind(this, '6')}>6</button>
                <button className="Btn" onClick={this.props.handleClick.bind(this, 'x')}>x</button>
            </div>

            <div className="Row">
                <button className="Btn" onClick={this.props.handleClick.bind(this, '1')}>1</button>
                <button className="Btn" onClick={this.props.handleClick.bind(this, '2')}>2</button>
                <button className="Btn" onClick={this.props.handleClick.bind(this, '3')}>3</button>
                <button className="Btn" onClick={this.props.handleClick.bind(this, '+')}>+</button>
            </div>

            <div className="Row">
                <button className="Btn" onClick={this.props.handleClick.bind(this, '0')}>0</button>
                <button className="Btn" onClick={this.props.handleClick.bind(this, '.')}>.</button>
                <button className="Btn" onClick={this.props.handleClick.bind(this, '=')}>=</button>
                <button className="Btn" onClick={this.props.handleClick.bind(this, '-')}>-</button>
            </div>
        </div>

        )

    }
}

export default NumberPad