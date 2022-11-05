import React, {useReducer, createContext} from "react";
import contextReducer from './contextReducer'

const initialState=JSON.parse(localStorage.getItem('transactions')) || [{"amount":350,"category":"Business","type":"Income","date":"2022-08-04","id":"dccfd99d-4cc4-4549-9550-d55fd1ac9160"}]; 

export const ExpenseTrackerContext =createContext(initialState);

export const Provider=({children}) =>{

    const[transactions,dispatch] = useReducer(contextReducer,initialState)

    const deleteTransaction=(id)=>dispatch({type:"DELETE_TRANSACTION", payload:id})
    const addTransaction=(transaction)=>dispatch({type:"ADD_TRANSACTION", payload:transaction})

    const balance= transactions.reduce((acc,curVal)=>curVal.type==='Expense' ? acc-curVal.amount : acc+curVal.amount,0);
    // console.log(balance);
    return(
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}