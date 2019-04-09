import React, {Component} from 'react'
import Field from './Playground/Field'
import Scores from './Scores'
import Results from './Results'
import {PLAYERS, MAX_SCORE} from "../consts/playground";


const initState = {
    //scores
    [PLAYERS.PLAYER_1]: 0,
    [PLAYERS.PLAYER_2]: 0,
    showResult: false,
    willUnmount: false
};


class Game extends Component {

    constructor(props) {
        super(props);
        this.scoresRef = React.createRef();
        this.state = initState
    }

    onScoreChange = (player) => {
        this.setState(prev => {
            if((prev[PLAYERS.PLAYER_1] + prev[PLAYERS.PLAYER_2] + 1) >= MAX_SCORE) {
                this.setState({ willUnmount: true });
                setTimeout(() => this.setState({ showResult: true }), 1000)
            }
            return {
                [player]: prev[player] + 1,
            }
        });
    };

    reset = () => {
        this.setState(initState);
        this.scoresRef && this.scoresRef.current.reset();
    };

    render() {
        return (<div className='app-container'>
            <Scores p1={this.state[PLAYERS.PLAYER_1]} p2={this.state[PLAYERS.PLAYER_2]} ref={this.scoresRef} />
            { this.state.showResult
                ? <Results
                    p1={this.state[PLAYERS.PLAYER_1]}
                    p2={this.state[PLAYERS.PLAYER_2]}
                    back={this.reset}
                />
                : <Field
                    onScoreChange={this.onScoreChange}
                    willUnmount={this.state.willUnmount}
                    scores={this.scoresRef}
                />
            }
        </div>)
    }
}


export default Game;