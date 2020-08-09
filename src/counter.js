import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    count: state.count
  };
 };
 

const Counter = (props) =>{
  const increment = () =>{
    props.dispatch({type: "INCREMENT"});
  };
  const decrement = () =>{
    props.dispatch({type: "DECREMENT"});
  };
   return (
     <div>
       <h2>Count</h2>
       <div style={{backgroundColor: "gray", padding: "20px", width: "20%", margin: "auto", borderRadius: "10px"}}>
         <button  onClick={() => decrement()} style={{marginRight: "10px"}}>-</button>
         <span className="count">{props.count}</span>
         <button  onClick={() => increment()} style={{marginLeft: "10px"}}>+</button>
       </div>
     </div>
   );
 }

export default connect(mapStateToProps)(Counter);