import React, { Component } from 'react'
import Box from './Box'
import { SIZES, PLAYERS, FIRST_PLAYER, VIEW_BOX } from '../../consts/playground'
import './../../../scss/gamefield.scss'


class Field extends Component {

    constructor(props) {
        super(props);
        this.state = {
            grid: this.buildGrid(),
            currentPlayer: FIRST_PLAYER,
        };
    }

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

    //build array of boxes for mounting
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

    onBoxFilled = (player) => {
        this.setState({
            currentPlayer: player
        });
        this.props.onScoreChange(player);
    };

    render() {
        return (<svg
            className={`game-field ${this.props.willUnmount ? 'downscale' : ''}`}
            viewBox={VIEW_BOX}>
            { this.state.grid }
        </svg>)
    }
}


export default Field;