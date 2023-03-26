import React, { useState } from "react"

const Box = (props) => {
    // const [color, setColor] = useState("");
    const {boxList, setBoxList} = props
    const [box, setBox] = useState({ color:""})
    
    const handleColor = (e) => {
        setBox({...box, [e.target.name]: e.target.value});
    };

    const createBox = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        setBoxList([...boxList, box])
//         console.log("box created", newBox);
        setBox({color: ""})
    }

    return (
        <div>
        <form onSubmit={ createBox }>
            <div>
                {
                    box.color.length < 1 ?
                    <p>Enter color name or a hexadecimal value </p>:
                    null
                }
                <label>Color: </label> 
                <input type="text" name="color" value={box.color} onChange={ handleColor } />
                {
                    box.color < 1  ?
                    <input type="submit" value="ADD" disabled /> : 
                    <input type="submit" value="ADD" />
                }
            </div>
        </form>
    </div>
    );

};
export default Box;