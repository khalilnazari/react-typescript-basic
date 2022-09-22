import React, { useReducer } from "react";

const initialState = { count: 0 }

// state Type
type stateType = {
    count: number,
}

// Type for reset action
type resetType =  {
    type: 'reset'
}

// Type for update action
type updateType = {
    type: 'increase' | 'decrease', 
    payload: number
}

// actionTypes choose updateType OR resetType depents on type of action.
type actionTypes =  updateType | resetType;

const reducer = (state:stateType, action:actionTypes) => {
    switch (action.type) {
        case 'increase':
            return {count: state.count + action.payload}
        case 'decrease': 
            return {count: state.count - action.payload}
        case 'reset': 
            return initialState; 
        default:
            return state; 
    }
}

const UseReducerStrictType = () => {
    const [state, dispatch] = useReducer(reducer, initialState); 
    return (
        <div>
            <p className="title">UseReducerStrictType</p>
            <button onClick={() => dispatch({type:'decrease', payload:10})}>Decrease</button>
            <span style={{marginRight:'10px', marginLeft:'10px'}}>{state.count}</span>
            <button onClick={() => dispatch({type:'increase', payload:10})}>Increase</button>
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>
        </div>
    ) 
}


export default UseReducerStrictType; 