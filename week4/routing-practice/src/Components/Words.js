import React from "react";
import { useParams } from "react-router-dom"; 

const Words = (props) => { 
    const { word } = useParams();
    
    return (
    <div className="Home">
        <h1 color="white">Word is { word }!</h1>
    </div>
    );
}

export default Words;