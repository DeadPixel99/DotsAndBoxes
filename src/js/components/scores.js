import React, { Component } from 'react'
import {PLAYERS, FIRST_PLAYER} from "../consts/playground";

class Scores extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: FIRST_PLAYER
        }
    }

    setCurrentPlayer(current) {
        this.setState({current})
    }

    reset() {
        this.setState({current : FIRST_PLAYER})
    }

    render() {
        return (<div className='scores-bar'>
            <h1>Dots 'n boxes</h1>
            <h2 className={`p1 ${PLAYERS.PLAYER_1 == this.state.current && 'current-p'}`}>Player 1: {this.props.p1}</h2>
            <h2 className={`p2 ${PLAYERS.PLAYER_2 == this.state.current && 'current-p'}`}>Player 2: {this.props.p2}</h2>
        </div>)
    }
}


export default Scores