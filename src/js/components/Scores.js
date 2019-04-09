import React, { Component } from 'react'
import {PLAYERS, FIRST_PLAYER} from "../consts/playground";
import './../../scss/scores.scss'


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
            <div className={PLAYERS.PLAYER_1 == this.state.current ? 'current-p' : ''}>
                <h2 className='p1'>Player 1: {this.props.p1}</h2>
            </div>
            <div className={PLAYERS.PLAYER_2 == this.state.current ? 'current-p' : ''}>
                <h2 className='p2'>Player 2: {this.props.p2}</h2>
            </div>
        </div>)
    }
}


export default Scores