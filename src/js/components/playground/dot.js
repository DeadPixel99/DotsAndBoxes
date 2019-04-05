import { SIZES, COLORS } from '../../consts/playground'
import React from "react";

export default (props) => {
    return (<circle
        fill={COLORS.DOT}
        cx={SIZES.FIELD_SIZE / SIZES.GRID_SIZE * props.x + SIZES.GRID_OFFSET}
        cy={SIZES.FIELD_SIZE / SIZES.GRID_SIZE * props.y + SIZES.GRID_OFFSET}
        r={SIZES.GRID_OFFSET}
    />)
}