import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Main = () => {
    const counterStore = useSelector(store => store.counter)
    let count = counterStore.count
    let data =counterStore.data


    const gameStores  = useSelector(store=>store.game)
    let game=gameStores.game
    let player =gameStores.player

    
    let dispatch = useDispatch()

    const increase_count = () => { 
            dispatch({type: "INCREASE COUNT"})

        }
    const decrease_count = () => { 
            dispatch({type: "DECREASE COUNT"})

        }
        const increase_data=()=>{
                dispatch({type: "INCREASE DATA"})
            }

            // const gameStore=useSelector(store=>store)
            // let game = gameStore.game
            // let player = gameStore.player

            const [gamename, setGame] = useState("")
            const [playername, setPlayer] = useState("")



            const update_game=()=>{
                dispatch({type:"UPDATE GAME", payload:gamename})
            }

            const update_player=()=>{
                dispatch({type: "UPDATE PLAYER", payload:playername})
            }

    return (
        <>
            <h1 className='dislay-1 text-center'>
                Count: {count}
            </h1>
            <center>
                <button className='btn btn-warning m-2' onClick={increase_count}>Increase count</button>
                <button className='btn btn-warning m-2' onClick={decrease_count}>Decrease count</button>
                <button className='btn btn-warning m-2' onClick={()=>{dispatch({type: 'RESET'})}}>Reset count</button>
            </center>
            <h1 className='dislay-1 text-center'>
                Data: {data}
            </h1>
            <center>
                <button className='btn btn-warning m-2' onClick={increase_data}>Increase Data</button>
                <button className='btn btn-warning m-2' onClick={()=>{dispatch({type:"DECREASE DATA"})}}>Decrease Data</button>
                <button className='btn btn-warning m-2' onClick={()=>{dispatch({type:"RESET DATA"})}}>Reset Data</button>
            </center>

            <h1 className='display-1 text-center'>Game : {game}</h1>
            <h1 className='display-1 text-center'>Player : {player}</h1>
            
            <input className='form-control w-50 m-auto my-3' type={"text"} placeholder="Enter the Game name" onChange={e=>setGame(e.target.value)}/> 
            <center>
            <button className='btn btn-primary btn-md text-center' onClick={update_game}> Update Game Name</button>
            <button className='btn btn-danger btn-md text-center m-3' onClick={()=>{dispatch({type:"RESET GAME"})}}> Reset Game</button>
            </center>

            <input className='form-control w-50 m-auto my-3' type={"text"} placeholder="Enter the Player name" onChange={e=>setPlayer(e.target.value)}/> 
            <center>
            <button className='btn btn-primary btn-md text-center' onClick={update_player}> Update Player Name</button>
            <button className='btn btn-danger btn-md text-center m-3' onClick={()=>{dispatch({type:"RESET PLAYER"})}}> Reset Player</button>
            </center>
            <center>
            </center>
        </>
    )
}

export default Main



// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import counterReducer from './counterReducer'

// const Main = () => {

//     const counterStore = useSelector(store => store)
//     let count = counterStore.count
//     let data = counterStore.data

//     let dispatch = useDispatch()

//     const increase_count = () => {
//         dispatch({type: "INCREASE COUNT"})
//     }

//     const increase_data =()=>{
//         dispatch({type : 'INCREASE DATA'})
//     }

//     return (
//         <>
//             <center>
//                 <h1>Count :{count}</h1>
//                 <h1>Data : {data}</h1>
//             </center>
//             <center>
//                 <button className='btn btn-primary btn-lg m-2' onClick={increase_count}> Increase count </button>
            
//                 <button className='btn btn-primary btn-lg' onClick={increase_data}> Increase data </button>
//             </center>
        
//         </>
//     )
// }

// export default Main