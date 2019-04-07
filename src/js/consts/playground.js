const SIZES = {
    FIELD_SIZE: 500,
    GRID_SIZE: 5,
    GRID_OFFSET: 7
};

const MAX_SCORE = (SIZES.GRID_SIZE - 1) * (SIZES.GRID_SIZE - 1);

const EDGES = {
    LEFT: "leftEdge",
    RIGHT: "rightEdge",
    TOP: "topEdge",
    BOTTOM: "bottomEdge",
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

export {
    SIZES,
    COLORS,
    EDGES,
    PLAYERS,
    MAX_SCORE
};