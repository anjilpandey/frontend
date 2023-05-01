import React from "react";
import { Link } from "react-router-dom";

function First(){
    return(
        <>
        <h1 style={{backgroundColor:"ButtonShadow", textAlign:"right"}}> Hello First</h1>
        <input type="text"/>
        <br></br>
        <input type="password"/>
        <h1 style={{backgroundColor:"ButtonText", textAlign:"center"}}>Digital Marketing</h1>
        <Link to="/second">Second</Link>
                </>
    )
    }

export default First 