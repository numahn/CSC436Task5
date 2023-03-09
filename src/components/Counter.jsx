import { useState, useReducer } from 'react';
const Counter = () => {
    const initialState = {
      count: 0,
      numberToChangeBy: 1
    }
    const reducer = (state, action) => {
      if(action.type === "increment"){
        const clonedState = {...state}
        let newValue = parseInt(clonedState.count, 10) + parseInt(clonedState.numberToChangeBy,10) //Was this necessary? or just to make sure?
        clonedState.count = newValue
        return clonedState
      }
      if(action.type === "decrement"){
        const clonedState = {...state}
        let newValue = clonedState.count - clonedState.numberToChangeBy //can do state, but better to do cloned
        clonedState.count = newValue
        return clonedState
      }
      if(action.type === "change number"){
        const clonedState = {...state}
        let newNumber = action.value
        clonedState.numberToChangeBy = newNumber
        return clonedState
      }
      return state
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return (<div className="App">
    <pre className="rainbow box text-center">Value {state.count}</pre>
    <div className="flex gap center">
        <button className="button-box" onClick={() => dispatch({type: 'increment'})}><span className="huge">+</span>Increment by {state.numberToChangeBy}</button>
        <button className="button-box" onClick={() => dispatch({type: "decrement"})}><span className="huge">-</span>Decrement by {state.numberToChangeBy}</button></div>
        <p className="flex gap center"><label className="button-box" htmlFor="number">Number to Increment/Decrement by </label><input className="input-box"  onChange={(e) => 
        {
          dispatch({type: "change number",
          value: e.target.value
        })
        }} type="number" value={state.numberToChangeBy} name="number" id="number" /></p>
  </div>);
}

export default Counter;