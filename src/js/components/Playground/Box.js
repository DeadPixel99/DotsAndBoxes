import React, { Component } from 'react'
import { EDGES, COLORS } from '../../consts/playground'
import { Dot, Square } from './StatelessRects'
import Edge from './Edge';


class Box extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //refs on neighbourhood boxes
            leftNeighbour: this.props.l,
            rightNeighbour: null,
            topNeighbour: this.props.t,
            bottomNeighbour: null,
            //state of box edges
            leftEdge: null,
            rightEdge: null,
            topEdge: null,
            bottomEdge: null,
            //state of box
            winner: COLORS.BACKGROUND
        };
    }

    //Set all relationship between neighbours
    componentDidMount() {
        this.state.leftNeighbour && this.state.leftNeighbour.ref.current.setState({
            rightNeighbour: this
        });
        this.state.leftNeighbour && this.setState({
            leftNeighbour: this.state.leftNeighbour.ref.current
        });
        this.state.topNeighbour && this.state.topNeighbour.ref.current.setState({
            bottomNeighbour: this
        });
        this.state.topNeighbour && this.setState({
            topNeighbour: this.state.topNeighbour.ref.current
        });
    }

    onEdgeClick = (edge) => {
        if(!this.state[edge]) {
            this.setState({
                [edge]: this.props.parent.state.currentPlayer
            });
            if(this.state[EDGES.NEIGHBOUR(edge)]) {
                this.state[EDGES.NEIGHBOUR(edge)].setState({
                    [EDGES.REVERSE(edge)]: this.props.parent.state.currentPlayer
                });
            }
            setTimeout(() =>
                this.props.parent.changePlayer(), 0)
        }
    };

    //check if all edges drawn
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.winner === COLORS.BACKGROUND) {
            if(this.state.leftEdge && this.state.rightEdge && this.state.topEdge && this.state.bottomEdge) {
                this.setState({
                    winner: this.props.parent.state.currentPlayer
                });
                setTimeout(() =>
                    this.props.parent.onBoxFilled(this.state.winner), 0)
            }
        }
    }

    render() {
        return (<g>
            <Square x={this.props.x}
                    y={this.props.y}
                    color={this.state.winner}
            />

            <Edge x={this.props.x}
                  y={this.props.y}
                  color={this.state.topEdge ? this.state.topEdge : COLORS.BACKGROUND}
                  onClick={() => this.onEdgeClick(EDGES.TOP)}
            />
            <Edge x={this.props.x}
                  y={this.props.y}
                  color={this.state.leftEdge ? this.state.leftEdge : COLORS.BACKGROUND}
                  h={true}
                  onClick={() => this.onEdgeClick(EDGES.LEFT)}
            />
            <Edge x={this.props.x}
                  y={this.props.y + 1}
                  color={this.state.bottomEdge ? this.state.bottomEdge : COLORS.BACKGROUND}
                  onClick={() => this.onEdgeClick(EDGES.BOTTOM)}
            />
            <Edge x={this.props.x + 1}
                  y={this.props.y}
                  color={this.state.rightEdge ? this.state.rightEdge : COLORS.BACKGROUND}
                  h={true}
                  onClick={() => this.onEdgeClick(EDGES.RIGHT)}
            />

            <Dot x={this.props.x} y={this.props.y} />
            <Dot x={this.props.x + 1} y={this.props.y} />
            <Dot x={this.props.x} y={this.props.y + 1} />
            <Dot x={this.props.x + 1} y={this.props.y + 1} />
        </g>)
    }
}


export default Box;