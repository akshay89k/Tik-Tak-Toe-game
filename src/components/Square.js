import React, { Component } from'react';
// import { Col } from 'react-bootstrap';

function Square({placeholder,click}){
   
    return (
         <div className="App_board_col" onClick={click}>
            {placeholder}
        </div>
    );
    
    
    
}

export default Square;


/* class Square extends Component{

    handleClick=(e)=>{
        console.log("clicked")
        if(this.props.isGameOn){
            var {isX,change} = this.props;
            this.setState({
                placeholder: isX? "X":"0"
            });
            change()
        }
        
    }

    state={
        placeholder:null
    }

    render(){
        return (
            <Col className="d-flex justify-content-center align-items-center" onClick={this.handleClick}>
                {this.state.placeholder}
            </Col>
        );
    }
    
    
}

export default Square; */