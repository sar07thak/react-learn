import { useReducer } from "react";

// useReducer is the substitute of useState for largegr data...... 

export const Reducer = () => {
    const reducer = (state,action ) => {
        console.log(state,action);
        switch ( action.type ) {
            case "increment" : return {count : state.count + 1} ;
            break;
            case "decrement" : return {count : state.count - 1 } ;
            break ;
            case  "reset" : return { count : 0 } ;
            default:
                break;
        }
    }

    const [count , dispatch ] = useReducer( reducer , 0) ;
    // console.log(useReducer);
    

    return(
        <>
        <div className="flex flex-col justify-center bg-slate-500 items-center h-screen">
            <p> { state.count } </p>
            <button onClick={() => dispatch({type:"increment"})}>
                increment
            </button>
            <button onClick={() => dispatch({type:"decrement"})}>decrement</button>
            <button onClick={() => dispatch({type : "reset "})}>reset</button>
        </div>
        </>
    );
}