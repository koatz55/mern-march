import React from 'react';

const IdCard = (props) => {
    const {firstName, lastName, hair, age, pic} = props;
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
            </div>
        );
} 

export default IdCard;