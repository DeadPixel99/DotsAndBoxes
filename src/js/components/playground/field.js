import React, { Component } from 'react'
import Box from './box'
import { SIZES, PLAYERS, FIRST_PLAYER } from '../../consts/playground'
import './../../../scss/gamefield.scss'

class Field extends Component {

    constructor(props) {
        super(props);
        this.state = {
            grid: this.buildGrid(),
            currentPlayer: FIRST_PLAYER,
        };
    }

    onBoxFilled = (player) => {
        this.setState({
            currentPlayer: player
        });
        this.props.onScoreChange(player);
    };

    changePlayer() {
        this.setState(prev => ({
            currentPlayer: prev.currentPlayer === PLAYERS.PLAYER_1
                ? PLAYERS.PLAYER_2
                : PLAYERS.PLAYER_1
        }))
    }

    //sync current player with scoreboard
    componentDidUpdate() {
        this.props.scores.current.setCurrentPlayer(this.state.currentPlayer)
    }

    render() {
        return <svg
            className={`game-field ${this.props.willUnmount ? 'downscale' : ''}`}
            viewBox={`0 0 ${SIZES.FIELD_SIZE + SIZES.GRID_OFFSET * 2} ${SIZES.FIELD_SIZE + SIZES.GRID_OFFSET * 2}`}>
            { this.state.grid }
        </svg>
    }

    buildGrid() {
        let grid = [];
        let key = 0;
        for(let i = 0; i < SIZES.GRID_SIZE; i++) {
            grid.push([]);
            for(let j = 0; j < SIZES.GRID_SIZE; j++) {
                grid[i].push(<Box
                    x={i}
                    y={j}
                    key={key++}
                    l={(i > 0) ? grid[i-1][j] : null}
                    t={(j > 0) ? grid[i][j - 1] : null}
                    parent={this}
                    ref={React.createRef()}/>)
            }
        }
        return grid;
    }
}


export default Field;