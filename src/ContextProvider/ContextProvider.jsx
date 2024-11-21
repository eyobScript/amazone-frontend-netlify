import React,{createContext, useReducer} from 'react'


export const DataProvider = createContext(); 
function ContextProvider({children,reducer, initialState}) {
   
  return (
    <DataProvider.Provider value={useReducer(reducer,initialState)}>
      {children}
    </DataProvider.Provider>
  )
}

export default ContextProvider
