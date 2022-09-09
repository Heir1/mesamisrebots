import React from "react";



function Card(props){
    return(
        <div className="card"> <img src={"https://robohash.org/"+props.image} style={{"width": "180px"}} alt="" />    
            <h3>{props.name}</h3>
            <h4>{props.email}</h4> 
        </div>
    )
}

export default Card