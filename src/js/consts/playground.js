const SIZES = {
    FIELD_SIZE: 500,
    GRID_SIZE: 4,
    GRID_OFFSET: 7
};

const EDGES = {
    LEFT: "leftEdge",
    RIGHT: "rightEdge",
    TOP: "topEdge",
    BOTTOM: "bottomEdge",
    //helper functions
    REVERSE: (self) => {
        switch (self) {
            case "leftEdge": return "rightEdge";
            case "rightEdge": return "leftEdge";
            case "topEdge": return "bottomEdge";
            case "bottomEdge": return "topEdge";
            default: return null
        }
    },
    NEIGHBOUR: (self) => {
        return self.replace('Edge', 'Neighbour')
    }
};

const COLORS = {
    DOT: "#000000",
    BACKGROUND: "#ffffff",
};

const PLAYERS = {
    PLAYER_1: "#ed2f2f",
    PLAYER_2: "#2fed68"
};

const FIRST_PLAYER = PLAYERS.PLAYER_1;
const MAX_SCORE = SIZES.GRID_SIZE * SIZES.GRID_SIZE;
const VIEW_BOX = `0 0 ${SIZES.FIELD_SIZE + SIZES.GRID_OFFSET * 2} ${SIZES.FIELD_SIZE + SIZES.GRID_OFFSET * 2}`;

export {
    EDGES,
    COLORS,
    MAX_SCORE,
    SIZES, VIEW_BOX,
    PLAYERS, FIRST_PLAYER
};