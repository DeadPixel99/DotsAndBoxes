import React, { Component } from 'react'
import './../../scss/results.scss'


class Results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            willUnmount: false
        }
    }

    reset = () => {
        this.setState({ willUnmount: true});
        setTimeout(() => {
            this.props.back();
        }, 1000)
    };

    render() {
        return (<div className={`results ${this.state.willUnmount && 'skew-it'}`}>
            <h1>{`${this.props.p1 > this.props.p2 ? 'Player 1' : 'Player 2'}`} WON!</h1>
            <button onClick={this.reset}>Play again</button>
        </div>)
    }
}


export default Results;