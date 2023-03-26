import React, { useState } from "react"

const Box = (props) => {
    // const [color, setColor] = useState("");
    const {boxList, setBoxList} = props
    const [box, setBox] = useState({ color:""})
    const [colorError ,setColorError] = useState("");
    
    const handleColor = (e) => {
        setBox({...box, [e.target.name]: e.target.value});
        // if (e.target.value < 1 ){
        //     setColorError("color must not be empty");
        // }else {
        //     setColorError("");
        // }
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
                <label>Color: </label> 
                <input type="text" name="color" value={box.color} onChange={ handleColor } />
                    {
                        colorError ?
                        <p>{ colorError }</p> :
                        ''
                    } 
            {
                colorError ?
                <input type="submit" value="ADD" disabled /> : 
                <input type="submit" value="ADD" />
            }
            </div>
        </form>
    </div>
    );

};
export default Box;