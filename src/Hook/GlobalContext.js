// import React, { createContext } from 'react'

import { createContext } from "react";
import React from "react";

// export const GlobalContext = createContext()

// const GlobalContextProvider = (props) => {

//     return (
//         <>
//             <GlobalContext.Provider value={"This is coming from global context"} >
//                 {props.children}
//             </GlobalContext.Provider>
//         </>
//     )
// }

// export default GlobalContextProvider


export const GlobalContext = createContext()

const GlobalContextProvider =(props)=>{

    return(
        <>
        <GlobalContext.Provider value={"This is coming from Global Context"}>
            {props.children}
        </GlobalContext.Provider>

        </>
    )


}

export default GlobalContextProvider


