import React, { Component } from 'react';
import { Row,Col } from 'react-bootstrap';
import Square from './Square';
import validateForResult from '../utils/board.util';



const INIT_STATE={
  isX:true,
  squares:new Array(9).fill(null)
}
class Board extends Component{

  state=INIT_STATE;
    

 /*  handleChange=()=>{
    this.setState({
      isX:!this.state.isX
    })
  } */

  handleClick=(idx)=>{
    var {isGameOn,change}=this.props;
    change();
    if(isGameOn && !this.state.squares[idx]){
      var newSquares=[...this.state.squares];
      newSquares[idx]=this.state.isX? "X":"0";
      var result=validateForResult(newSquares);
      this.setState({
      isX:!this.state.isX,
      squares:newSquares
    });
      if(!result.isGameOn ){
        setTimeout(()=>{
          this.setState(INIT_STATE);
        },4000);
        this.props.updateGame(false,result.winner,result.isDraw);
      }
    } 
  }
  render(){
    var {squares}=this.state;
    console.log(this.state.squares);
    console.log(validateForResult(this.state.squares)) //or pass squares
    var {squares}=this.state;
    var {handleClick}=this;
    var {player,isGameOn}=this.props
    return (
      <Row className="justify-content-center"> 
           { /*-----------------------------------------------------doubt----------------*/}
            {(player && isGameOn) && <h4>{player}'s turn</h4>}
            <Col md={12} className="p-4 App_board">
              <Row className="App_board_row">
                {squares.map((val,idx)=>{
                  return (
                    <Square key={idx} click={()=>handleClick(idx)} placeholder={val}/>
                  )
                })}
                {
                /* <Square click={()=>handleClick(0)} placeholder={squares[0]}/>
                <Square click={()=>handleClick(1)} placeholder={squares[1]}/>
                <Square click={()=>handleClick(2)} placeholder={squares[2]}/>
                <Square click={()=>handleClick(3)} placeholder={squares[3]}/>
                <Square click={()=>handleClick(4)} placeholder={squares[4]}/>
                <Square click={()=>handleClick(5)} placeholder={squares[5]}/>
                <Square click={()=>handleClick(6)} placeholder={squares[6]}/>
                <Square click={()=>handleClick(7)} placeholder={squares[7]}/>
                <Square click={()=>handleClick(8)} placeholder={squares[8]}/> */
                }
                </Row>
            </Col>
          </Row>
  );
  }   
}

export default Board;