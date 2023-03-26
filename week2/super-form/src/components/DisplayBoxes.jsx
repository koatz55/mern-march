import React, {useState} from 'react';
import box from './Box';
const DisplayBoxes = (props) => {

    const {boxList, setBoxList} = props
    return (
        <div className='Box-List'>
            {
                boxList.map((box, idx) => (
                <div key={idx} className='Box' style={{backgroundColor: box.color, color: box.color}} >{box.color}</div>
                ))
            }
        </div>
    )
}

export default DisplayBoxes;