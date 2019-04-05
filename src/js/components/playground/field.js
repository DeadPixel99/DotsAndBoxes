import React, { Component } from 'react'
import Box from './box'
import { SIZES } from '../../consts/playground'

class Field extends Component {

    constructor(props) {
        super(props);
        this.state = {
            grid: Field.buildGrid()
        }
    }

    render() {
        return <svg
            className='game-field'
            viewBox={`0 0 ${SIZES.FIELD_SIZE} ${SIZES.FIELD_SIZE}`} width={800} >
            { this.state.grid }
        </svg>
    }

    static buildGrid() {
        let grid = [];
        for(let i = 0; i < SIZES.GRID_SIZE-1; i++) {
            grid.push([]);
            for(let j = 0; j < SIZES.GRID_SIZE-1; j++) {
                grid[i].push(<Box
                    x={i}
                    y={j}
                    key={i + j}
                    l={(i > 0) ? grid[i-1][j] : null}
                    t={(j > 0) ? grid[i][j - 1] : null}
                    ref={React.createRef()}
                />)
            }
        }
        return grid;
    }
}


export default Field;