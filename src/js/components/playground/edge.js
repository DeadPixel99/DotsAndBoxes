import React, { Component } from 'react'
import {COLORS, SIZES} from "../../consts/playground";


class Edge extends Component{

    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }

    onClick = () => {
        if(!this.state.clicked) {
            this.props.onClick();
            this.setState({
                clicked: true
            })
        }
    };
    
    render() {
        return (<line
            className={`edge ${ !this.state.clicked && 'hover' }`}
            fill={COLORS.DOT}
            x1={SIZES.FIELD_SIZE / SIZES.GRID_SIZE * this.props.x + SIZES.GRID_OFFSET}
            y1={SIZES.FIELD_SIZE / SIZES.GRID_SIZE * this.props.y + SIZES.GRID_OFFSET}
            x2={(SIZES.FIELD_SIZE / SIZES.GRID_SIZE * this.props.x + SIZES.GRID_OFFSET) + (!this.props.h
                ? SIZES.FIELD_SIZE / SIZES.GRID_SIZE
                : 0 )}
            y2={(SIZES.FIELD_SIZE / SIZES.GRID_SIZE * this.props.y + SIZES.GRID_OFFSET) + (this.props.h
                ? SIZES.FIELD_SIZE / SIZES.GRID_SIZE
                : 0) }
            stroke={this.props.color}
            strokeWidth={SIZES.GRID_OFFSET}
            onClick={this.onClick}
        />)
    }
}


export default Edge;