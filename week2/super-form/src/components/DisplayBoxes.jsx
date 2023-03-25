import React, {useState} from 'react';

const DisplayBoxes = (props) => {

    const {boxList, setBoxList} = props
    return (
        <div>
            {
                boxList.map((box, idx) => (
                    <div key={idx}>
                        <div className='Box' style={box.color}></div>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayBoxes;