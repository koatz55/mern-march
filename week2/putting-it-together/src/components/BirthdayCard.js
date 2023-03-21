import React, { useState } from 'react';

const BirthdayCard = (props) => {
    const {firstName, lastName, hair, age, pic} = props;
    // value is used for age 
    const [state, setState] = useState({
        clickCount: parseInt(props.age)
    });
    const handleClick = () => {
        setState({                   
            clickCount: state.clickCount + 1
        });
    }
        return(
            <div className = 'idCard'>
                <h2>
                    {firstName}, {lastName}
                </h2>
                <img src={pic} alt='card pic' height='150'></img>
                {/* w3schools and webstyle press */}
                <p> 
                    Age: {state.clickCount}
                </p>
                <p>Hair: {hair}</p>
                <div>     
                    <button onClick={ handleClick }>Happy Birthday!</button>
                </div>
            </div>
        );
} 

export default BirthdayCard;