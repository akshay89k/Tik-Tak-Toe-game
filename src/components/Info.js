import React, { Component } from 'react';
import {Form,Button } from "react-bootstrap";




//-------------------------------------3rd time converting class based component to function based component again---------------
const arr=["player1","player2"];
function getFormDtata(formData){
  /*var obj={};
    arr.forEach((key)=>{
    obj[key]=formData.get(key);
  }); */
  var obj=arr.reduce((acc,key)=>{
    acc[key]=formData.get(key);
    return acc;
  },{})
  return obj;
}
 
function Info({updateGame,isGameOn}){ 

    function handleSubmit(e){
      console.log('clicked on submit');
      e.preventDefault();
      var formData=new FormData(e.target);
      var playersInfo=getFormDtata(formData);
      updateGame(true,undefined,undefined,playersInfo);
      e.target.reset();
      // console.log(e.target);
      // console.log("formData is: "+formData);
      // for(var key of formData.keys()){
      //   console.log(key);
      // }
      // console.log(typeof(formData));
      // var player1=formData.get('player1');
      // var player2=formData.get('player2');
      // console.log("p1 is:"+p1);
      // console.log({p1,p2});
      var formData=new FormData(e.target);
      console.log(getFormDtata(formData));
      var playersInfo=getFormDtata(formData);
      //console.log(this.input.current.value); //used Refs//-----------
    }

  // input=React.createRef(); used Refs//--------------------

  return (
      <Form onSubmit={handleSubmit} >
            <h3>Players information</h3>

            <Form.Group>
              <Form.Label>
                player 1 name:
              </Form.Label>
              {/* <Form.Control type="text" ref={this.input}> */} {/* used Refs -------------*/}
              <Form.Control type="text" name="player1" >
                
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>
                player 2 name:
              </Form.Label>
              <Form.Control type="text" name="player2" >
                
              </Form.Control>
            </Form.Group>
            
            <Button variant="primary" type="submit" disabled={isGameOn}>
              Submit
            </Button>

          </Form>

  );
  }


export default Info;





//--------------------------------------------------2nd time using Refs and State--------------------------------------------
// we can use "Refs" and "state" in class based component


// class Info extends Component{ 

//     handleSubmit=(e)=>{
//     console.log('clicked on submit');
//     e.preventDefault();
//     console.log(this.state);
//     //console.log(this.input.current.value); //used Refs//-----------
//     }

//     // input=React.createRef(); used Refs//--------------------

//     state={
//       player1:null,
//       player2:null
//     }

//     changeHandler=(e)=>{
//       console.log('changed');
//       console.log(e.target.name);
//       this.setState(
//         {[e.target.name]:e.target.value
//         }
//       );
//     }

//     render(){
//     return (
//         <Form onSubmit={this.handleSubmit} >
//               <h3>Players information</h3>
  
//               <Form.Group>
//                 <Form.Label>
//                   player 1 name:
//                 </Form.Label>
//                 {/* <Form.Control type="text" ref={this.input}> */} {/* used Refs -------------*/}
//                 <Form.Control type="text" name="player1" onChange={this.changeHandler}>
                  
//                 </Form.Control>
//               </Form.Group>
  
//               <Form.Group>
//                 <Form.Label>
//                   player 2 name:
//                 </Form.Label>
//                 <Form.Control type="text" name="player2" onChange={this.changeHandler}>
                  
//                 </Form.Control>
//               </Form.Group>
              
//               <Button variant="primary" type="submit">
//                 Submit
//               </Button>
  
//             </Form>

//     );
//     }
// }

// export default Info;

//----------------------------------------------------------------------1st time-----------------------------------------------

// use props or {submit,isDiabled}
/* 
function Info(props){ 
    return (
        <Form onSubmit={props.submit}>
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
              
              <Button variant="primary" type="submit" disabled={props.isDisabled}>
                Submit
              </Button>
  
            </Form>

    );
}

export default Info;
*/