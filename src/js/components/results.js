import React, { Component } from 'react'

const Results = (props) => (<div className='results'>
        <h1>{`${props.p1 > props.p2 ? 'Player 1' : 'Player 2'}`} WON!</h1>
        <button onClick={props.back}>play again</button>
    </div>);


export default Results;