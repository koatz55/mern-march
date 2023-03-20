import React, { useState } from 'react';
const Product = props =>{
    const [state, setState] = useState({
        clickCount: 0
    });
 
    const handleClick = () => {
        setState({                   // the setter will update the value held in state
            clickCount: state.clickCount + 1
        });
    }
 
    return (
        <div>     
            { state.clickCount }<button onClick={ handleClick }>Click Me</button>
        </div>// displaying the current value held in our state object
    );
    
    

}
export default Product;