import React, {Component} from 'react'
import Field from './playground/field'
import Scores from './scores'
import {PLAYERS} from "../consts/playground";

export default class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //scores
            [PLAYERS.PLAYER_1]: 0,
            [PLAYERS.PLAYER_2]: 0
        }
    }

    onScoreChange = (player) => {
        this.setState(prev => ({
            [player]: prev[player] + 1
        }))
    };

    render() {
        return <div className='app-container'>
            <Scores p1={this.state[PLAYERS.PLAYER_1]} p2={this.state[PLAYERS.PLAYER_2]} />
            <Field onScoreChange={this.onScoreChange} />
        </div>
    }
}
