import React, { useReducer } from 'react'

// Tyep of state
type stateType = {
    count: number,
}

// Type for action
type actionType = {
    type: string, 
    payload: number
}

// inistual state for useReducer
const initialState = {count:0};

// apply above type
const reducer = (state:stateType, action:actionType) => {
    switch (action.type) {
        case 'increase':
            return {count: state.count + action.payload};

        case 'decrease': 
            return {count: state.count - action.payload};

        default:
            return state; 
    }
} 


const UseReducerType = () => {
    // state
    const [state, dispatch] = useReducer(reducer, initialState)

    // jsx
    return (
        <div>
            <button onClick={() => dispatch({type:'increase', payload:10})}>Increase by 10</button>
            <span style={{marginRight:'10px', marginLeft:'10px'}}>{state.count}</span>
            <button onClick={() => dispatch({type:'decrease', payload:10})}>Decrease by 10</button>
            {/* 
                Tyepscripe complain for below data pass. 
                <button onClick={() => dispatch({type:false, payload:'10'})}>Decrease by 10</button>
            */}
        </div>
    ) 
}

export default UseReducerType; 