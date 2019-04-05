import React, { Component } from 'react'
import { EDGES, COLORS } from '../../consts/playground'
import Dot from './dot'
import Edge from './edge'

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
            leftEdge: false,
            rightEdge: false,
            topEdge: false,
            bottomEdge: false
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

    neighboursWalk() {

    }

    checkVictory() {
        console.log('checked');
    }

    onEdgeClick = (edge) => {
        if(!this.state[edge]) {
            this.setState({
                [edge]: true
            });
            if(this.state[EDGES.NEIGHBOUR(edge)]) {
                this.state[EDGES.NEIGHBOUR(edge)].setState({
                    [EDGES.REVERSE(edge)]: true
                });
                this.state[EDGES.NEIGHBOUR(edge)].checkVictory();
            }
        }
        this.checkVictory();
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.dir(this)
    }

    render() {
        return <g>
            <Edge x={this.props.x}
                  y={this.props.y}
                  color={this.state.topEdge ? COLORS.PLAYER_1 : COLORS.BACKGROUND}
                  onClick={() => this.onEdgeClick(EDGES.TOP)}/>
            <Edge x={this.props.x}
                  y={this.props.y}
                  color={this.state.leftEdge ? COLORS.PLAYER_1 : COLORS.BACKGROUND}
                  h={true}
                  onClick={() => this.onEdgeClick(EDGES.LEFT)}/>
            <Edge x={this.props.x}
                  y={this.props.y + 1}
                  color={this.state.bottomEdge ? COLORS.PLAYER_1 : COLORS.BACKGROUND}
                  onClick={() => this.onEdgeClick(EDGES.BOTTOM)}/>
            <Edge x={this.props.x + 1}
                  y={this.props.y}
                  color={this.state.rightEdge ? COLORS.PLAYER_1 : COLORS.BACKGROUND}
                  h={true}
                  onClick={() => this.onEdgeClick(EDGES.RIGHT)}/>

            <Dot x={this.props.x} y={this.props.y}/>
            <Dot x={this.props.x + 1} y={this.props.y}/>
            <Dot x={this.props.x} y={this.props.y + 1}/>
            <Dot x={this.props.x + 1} y={this.props.y + 1}/>
        </g>
    }
}


export default Box;