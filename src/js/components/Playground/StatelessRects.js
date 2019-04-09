import { SIZES, COLORS } from '../../consts/playground'
import React from "react";


const Dot = (props) => {
    return (<circle
        fill={COLORS.DOT}
        cx={SIZES.FIELD_SIZE / SIZES.GRID_SIZE * props.x + SIZES.GRID_OFFSET}
        cy={SIZES.FIELD_SIZE / SIZES.GRID_SIZE * props.y + SIZES.GRID_OFFSET}
        r={SIZES.GRID_OFFSET}
    />)
};


const Square = (props) => {
    return (<rect
        x={SIZES.FIELD_SIZE / SIZES.GRID_SIZE * props.x + SIZES.GRID_OFFSET}
        y={SIZES.FIELD_SIZE / SIZES.GRID_SIZE * props.y + SIZES.GRID_OFFSET}
        width={SIZES.FIELD_SIZE / SIZES.GRID_SIZE}
        height={SIZES.FIELD_SIZE / SIZES.GRID_SIZE}
        fill={props.color}
    />)
};


export {
    Dot, Square
}