import reducer from "./reducer";

function customStore(redureducercer){
  let state; 
  let listeners = []

  function subscribe(listener){
    listeners.push(listener)
  }

  function dispatch(action){
    state = reducer(state,action)
    for(i=0; i < listeners.length; i++)
      listeners[i]()
  }

  function getState(){
    return state;
  }
  return {
    dispatch,
    getState
  }
}

export default customStore(reducer);