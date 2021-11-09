import React, { Component } from "react";
import { Container, Row ,Col, Form,Button } from "react-bootstrap";
import Feedback from './components/Feedback'
import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";
import Info from "./components/Info";




class App extends Component{

  state={
    isGameOn:false,
    winner:null,
    isDraw:false,
    player1:null,
    player2:null,
    turn:null
  }

  handleChange=()=>{
      console.log("handle change fn executed")
      var {turn}=this.state;
      this.setState({
        turn: turn==1 ? 2:1
      });
      
  }

  handleGameUpdate=(flag,winner,isDraw,playersInfo)=>{
    if(flag){
      var randomValue=Math.floor(Math.random()*2)+1;
      /*var randomTurn;
      if(randomValue===1){
        randomTurn=playersInfo.player1;
      }
      else{
        randomTurn=playersInfo.player2;
      } */
      this.setState({
        isGameOn:flag,
        ...playersInfo,
        turn:randomValue
      });
    }

    else{
      var won;
      if(winner){
        won=this.state.turn==2 ? this.state.player1:this.state.player2;
      }
      else{
        won=this.state.winner
      }
      this.setState({
        isGameOn:flag,
        winner: won/* winner:this.state.winner */,
        isDraw:isDraw ? isDraw : this.state.isDraw
      });
    }
    
  }

  render(){
    var {player1,player2,turn}=this.state;
    var chance;

      if(turn==1){
        chance=player1;
      }

      else{
        chance=player2;
      }
    return (
      <Container>
        <Row className="justify-content-center mt-4">
          <Header/>
        </Row>
        <Row className="mt-4 p-3">
          <Col md={4}>
            <Info isGameOn={this.state.isGameOn} updateGame={this.handleGameUpdate}/>
          </Col>
          <Col md={{span:4, offset:4}}>
            <Board isGameOn={this.state.isGameOn} updateGame={this.handleGameUpdate} player={chance} change={this.handleChange}/>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Feedback winner={this.state.winner} draw={this.state.isDraw} isGameOn={this.state.isGameOn} />
        </Row>
      </Container>
    );
  } 
}
    

  

export default App;





// for class to become component it should have render() and render() should return jsx
/*
 class App extends Component{
  state={
    isDisabled:false
  }

  submitHandler=(e)=>{
    e.preventDefault();
    this.setState({isDisabled:true});
    console.log('clicked');
    console.log(this);
  }

  render(){
    return (
      <Container>
        <Row className="justify-content-center mt-4">
          <Header/>
        </Row>
        <Row className="mt-4 p-3">
          <Col md={4}>
            <Info isDisabled={this.state.isDisabled} submit={this.submitHandler}/>
          </Col>
          <Col md={{span:6, offset:2}}>
            <Board/>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Feedback/>
        </Row>
      </Container>
    );
  }
    
} 
*/




//functional component : it should return jsx object
/*
function App() {
  //  return (
  //   <React.Fragment>
  //     <header className="App_header">
  //       Tic Tak Toe
  //     </header>
  //     <main className="App_main"></main>
  //     <footer className="App_footer"></footer>
  //   </React.Fragment>
  // ); 
  var isDisabled=false;
  function submitHandler(e){
    e.preventDefault();
    console.log('clicked');
  } 
  return (
    <Container>
      <Row className="justify-content-center mt-100">
        <h1>Tic Tak Toe</h1>
      </Row>
      <Row className="mt-4 p-3">
        <Col md={4}>
          <Form onSubmit={submitHandler}>
            <h3>Players information</h3>

            <Form.Group>
              <Form.Label>
                player 1 name:
              </Form.Label>
              <Form.Control type="text">
                
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>
                player 2 name:
              </Form.Label>
              <Form.Control type="text">
                
              </Form.Control>
            </Form.Group>
            
            <Button variant="primary" type="submit" disabled={isDisabled}>
              Submit
            </Button>

          </Form>
        </Col>
        <Col md={{span:6, offset:2}}>
          <Row className="justify-content-center"> 
            <h4>Akash turn</h4>
            <Col md={12} className="p-4 App_board">
              <Row className="App_board_row">
                <Col></Col>
                <Col></Col>
                <Col></Col>
              </Row>
              <Row className="App_board_row">
                <Col></Col>
                <Col></Col>
                <Col></Col>
              </Row>
              <Row className="App_board_row">
                <Col></Col>
                <Col></Col>
                <Col></Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-center">
        player 2 won
      </Row>
    </Container>
  );
}
*/

