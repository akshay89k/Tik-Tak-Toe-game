import React from 'react';

function Feedback({winner,draw, isGameOn}){
    if(winner){
        return (<h4>winner is {winner}</h4>);
    }
    if(draw){
        return (<h4>Game is draw</h4>)
    }
    if(isGameOn){
        return (<h4>Game is on</h4>);
    }
    return (
        <h4>play Tik Tak Toe</h4>
    );
}

export default Feedback;