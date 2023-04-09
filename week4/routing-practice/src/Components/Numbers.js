import React from "react";
import { useParams } from "react-router-dom"; 

const Numbers = (props) => { 
    const { num } = useParams();
    
    return (
    <div className="Home">
        <h1 color="white">Number is { num }!</h1>
    </div>
    );
}

export default Numbers;
