import { SIZES, COLORS } from '../../consts/playground'
import React from "react";

export default (props) => {
    return (<line
        className='edge'
        fill={COLORS.DOT}
        x1={SIZES.FIELD_SIZE / SIZES.GRID_SIZE * props.x + SIZES.GRID_OFFSET}
        y1={SIZES.FIELD_SIZE / SIZES.GRID_SIZE * props.y + SIZES.GRID_OFFSET}
        x2={(SIZES.FIELD_SIZE / SIZES.GRID_SIZE * props.x + SIZES.GRID_OFFSET) + (!props.h
            ? SIZES.FIELD_SIZE / SIZES.GRID_SIZE
            : 0 )}
        y2={(SIZES.FIELD_SIZE / SIZES.GRID_SIZE * props.y + SIZES.GRID_OFFSET) + (props.h
            ? SIZES.FIELD_SIZE / SIZES.GRID_SIZE
            : 0) }
        stroke={props.color}
        strokeWidth={SIZES.GRID_OFFSET}
        onClick={props.onClick}
    />)
}