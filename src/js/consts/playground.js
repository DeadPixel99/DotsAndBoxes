const SIZES = {
    FIELD_SIZE: 500,
    GRID_SIZE: 5,
    GRID_OFFSET: 5
};

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
        }
    },
    NEIGHBOUR: (self) => {
        return self.replace('Edge', 'Neighbour')
    }
};

const COLORS = {
    PLAYER_1: "#ed2f2f",
    PLAYER_2: "#2fed68",
    DOT: "#000000",
    BACKGROUND: "#ffffff"
};

export {
    SIZES,
    COLORS,
    EDGES
};