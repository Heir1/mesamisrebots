import React from "react";


function Entete(props){
    return(
        <div className="header">
            <h1>MES AMIS ROBOTS</h1>
            <input type="text" placeholder="Rechercher par nom" onChange={(e) => props.setSearchRobot(e.target.value)} />
        </div>
    )
}

export default Entete;