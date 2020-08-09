


const initialState ={
  count : 0
}

const reducer = (state=initialState,action)=>{
switch(action.type){
case "DECREMENT":
  return {
   count : state.count -1
} ;
case "INCREMENT":
return {
  count : state.count +1
};
default :
return state
}
}

export default reducer;
