import React, { useState } from 'react';

const BirthdayCard = (props) => {
    const {firstName, lastName, hair, age, pic} = props;
    const [state, setState] = useState({
        clickCount: props.age
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
                    Age: {age}
                </p>
                <p>Hair: {hair}</p>
                <div>     
                    { state.clickCount }<button onClick={ handleClick }>Click Me</button>
                </div>
            </div>
        );
} 

export default BirthdayCard;