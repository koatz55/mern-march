import React from "react";
import { useParams } from "react-router-dom"; 

const Hello = (props) => { 
    const {paint} = useParams();
    const {backdrop} = useParams();
    
    return (
    <div className="Home">
        <h1 color={paint} style={{background:backdrop}}>Hello!</h1>
    </div>
    );
}

export default Hello;