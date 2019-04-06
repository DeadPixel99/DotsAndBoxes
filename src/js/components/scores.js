import React, { Component } from 'react'


class Scores extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div className='scores-bar'>
            <h1>Dots 'n boxes</h1>
            <h2 className="p1">Player 1: {this.props.p1} </h2>
            <h2 className="p2">Player 2: {this.props.p2} </h2>
        </div>)
    }
}


export default Scores