import React, {useState, useEffect} from "react";
import axios from "axios";
import './style.css';
import Card from "./Components/Card";
import Entete from "./Components/Entente";

function Mesrobots(){
    
    const [robots, setRobots] = useState([]);
    const [searchRobot, setSearchRobot] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const result = await axios.get("https://jsonplaceholder.typicode.com/users");
            setRobots(result.data);
            setLoading(false);
        }
        fetchData();
    }, [])

    
    
    // console.log(robots);

    return(
        <>
            <div className="content">

                {/* debut composant entete */}
                
                <Entete setSearchRobot={setSearchRobot} />

                {/* fin composant entete */}

                <div className="row">
                    {
                        loading ? (
                            <h1> Loading...</h1>
                        ) 

                        :

                        (
                            robots.filter((nomRobot) => {
                                if(searchRobot.trim().length < 3){
                                    return nomRobot
                                }
                                else if(nomRobot.name.toLowerCase().includes(searchRobot.toLowerCase())){
                                    return nomRobot
                                }
                            }).map( item => (
                                // debut du composant card
    
                                <Card  key={item.id} name={item.name} email={item.email}  image={item.id} />
    
                                // find du composant card
                            ))
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Mesrobots;