import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "./GlobalContext"

// {usestate()/--re render 
// let/const [name, setName] = useState(initial value)
// here name is variable being changed and setName is function that is related to name variable}

// useEffect()-- shows side effects when changes to state variable 
// {
// useeffect(funtion, variable to change/dependencies--[])
// }
// const Counter = () => {
//     let [count, setCount] = useState(0)

//     let [data, setData] = useState(100)

//     const inc_data = () => {
//         setData(data = data + 30)
//     }
//     const dec_data = () => {
//         setData(data = data - 30)
//     }

//     const inc_count = () => {
//         setCount(++count)
//         // console.log(count)
//     }
//     const dec_count = () => {
//         setCount(--count)
//         // console.log(count)

//     }
//     // useEffect(() => {
//     //     window.alert("The value is updated")
//     // }, [])

//     let info = useContext(GlobalContext)
//     return (
//         <>
//             {info}
//             <h3 className='text-center bg-primary text-white'>Note : Count must be greater than -10 & lower than 10</h3>
//             <h1 className='text-center display-1'>Count:{count}</h1>
//             <center>
//                 {
//                     count < 10 &&
//                     <button className='btn btn-success btn-lg' onClick={inc_count}>Increase Count</button>
//                 }
//                 &nbsp;
//                 {
//                     count > -10 &&
//                     <button className='btn btn-danger btn-lg' onClick={dec_count} >Decrease Count</button>
//                 }
//                 &nbsp;
//                 <button className='btn btn-warning btn-lg' onClick={() => { setCount(0) }}>Reset Data</button>
//             </center>
//             <br />
//             <h3 className='text-center bg-primary text-white'>Note : Data must be greater than -80 & lower than 200</h3>

//             <h1 className='text-center display-1'>Data:{data}</h1>
//             <center>
//                 {
//                     data < 200 &&
//                     <button className='btn btn-success btn-lg' onClick={() => { setData(data = data + 10) }}>Increase data</button>
//                 }

//                 &nbsp;
//                 {
//                     data > -80 &&
//                     <button className='btn btn-danger btn-lg' onClick={() => { setData(data = data - 10) }}>Decrease data</button>
//                 }

//                 &nbsp;
//                 <button className='btn btn-warning btn-lg' onClick={() => { setData(0) }}>Reset Data</button>
//             </center>
//             {/* <center>

//                 <button className='btn btn-success btn-lg' onClick={inc_data}>Increase data</button>
//                 &nbsp;
//                 <button className='btn btn-success btn-lg' onClick={dec_data}>Decrease data</button>
//             </center> */}
//             <center>

//             </center>
//         </>
//     )
// }



// Again

// const Counter = () => {

//     let count=0

//     const inc_count=()=>{
//         count++
//     }
//     return (
//          <>
//          <center>
//             <h1 className="display-1">Count : {count} </h1>
//             <button className="btn btn-primary btn-lg" onClick={inc_count}>Increase Data</button>
//             </center>
//         </>
//     )


// }

const Counter = () => {

    let [count, setCount] = useState(0)
    let [data, setData] = useState(100)

    // useEffect(()=>{

    //     window.alert("Updated")

    // },[])

    const inc_count = () => {
        setCount(++count)
    }

    let anjil = useContext(GlobalContext)

    return (
        <>
        {anjil}
            <center>
                <h1 className="display-1">Count : {count}</h1>
                {
                    count < 10 &&
                    <button className="btn btn-primary btn-lg m-2" onClick={inc_count}>Increase Count </button>
                }
                {
                    count>-10 &&
                <button className="btn btn-primary btn-lg m-2" onClick={() => setCount(--count)}>Decrease Count </button>
                 }
                    <button className="btn btn-primary btn-lg m-2" onClick={()=>setCount(0)}>Reset </button>

                 <h1 className="display-1"> Data:{data}</h1>
                 {
                    data<100 &&
                 <button className="btn btn-secondary btn-lg m-2" onClick={()=>{setData(data+10)}}>Increase Data</button>
                 }
                 {
                    data>-100 &&
                 <button className="btn btn-secondary btn-lg m-2" onClick={()=>{setData(data-10)}}>Decrease Data</button>
                 }
                 <button className="btn btn-secondary btn-lg m-2" onClick={()=>{setData(0)}}>Reset</button>

            </center>
        </>
    )
}



export default Counter