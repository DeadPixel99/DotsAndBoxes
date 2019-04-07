import React, {Component} from 'react'
import Field from './playground/field'
import Scores from './scores'
import Results from './results'
import {PLAYERS, MAX_SCORE } from "../consts/playground";


const initState = {
    //scores
    [PLAYERS.PLAYER_1]: 0,
    [PLAYERS.PLAYER_2]: 0,
    showResult: false
};


class Game extends Component {

    constructor(props) {
        super(props);
        this.state = initState
    }

    onScoreChange = (player) => {
        this.setState(prev => ({
            [player]: prev[player] + 1,
            showResult: (prev[PLAYERS.PLAYER_1] + prev[PLAYERS.PLAYER_2] + 1) >= MAX_SCORE
        }))
    };

    reset = () => {
        this.setState(initState);
    };

    render() {
        return <div className='app-container'>
            <Scores p1={this.state[PLAYERS.PLAYER_1]} p2={this.state[PLAYERS.PLAYER_2]} />
            { this.state.showResult
                ? <Results p1={this.state[PLAYERS.PLAYER_1]} p2={this.state[PLAYERS.PLAYER_2]} back={this.reset}/>
                : <Field onScoreChange={this.onScoreChange}/>
            }
        </div>
    }
}


export default Game;
