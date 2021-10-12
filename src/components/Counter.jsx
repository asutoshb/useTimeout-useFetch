import React, {useReducer} from 'react';

function reducer(state, {type, payload})
{
    switch(type)
    {
        case "ADD": 
            return {
                ...state, 
                count: state.count+payload
            }
        case "REDUCE": 
            return {
                ...state, 
                count: state.count+payload
            }
        default: 
            return {...state}
    }
}

 const initState = {
        count: 0
    }

export const Counter = () => {

   

    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <div>
            <h1>{state.count}</h1>
            
            <button onClick={()=>{dispatch({type: "ADD", payload:1})}}>
                ADD 1
            </button>

            <button onClick={()=>{dispatch({type: "REDUCE", payload:-1})}}>
                REDUCE 1
            </button>
        
        </div>
    )
}

// function debouncer( delay, callback ){
//   var debounce;
//   return function(e){
//       debounce && clearTimeout(debounce);
//       debounce = setTimeout(function(){
//           callback(e)
//       },delay)
//   }
// }
// function throttle( fn, wait ){
//     let lastCall = 0;
//     return function(){
//     if( Date.now() - lastCall > wait  ){
//       lastCall = Date.now()
//       fn()
//     }
//   }
// }
