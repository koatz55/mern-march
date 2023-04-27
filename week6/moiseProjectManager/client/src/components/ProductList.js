import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
const ProductList = (props) => {
    /* We deconstruct getter and setter which were passed down 
    via props by the parent component (app.js) to our child 
    component (ProductList.js). Now we can easily use the getter 
    and setter without having to write props.getter or props.setter every time: */
    const {product, setProduct} = props;
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/product")
        .then((res)=>{
        console.log(res.data);
            setProduct(res.data);
	})
        .catch((err)=>{
            console.log(err);
        })
    }, [setProduct])
    
    return (
        <div>
            {
                product.map((product, index)=>{
                return( <div key={index}> 
                <p>{product.title}</p>
                <p>{product.price}</p>
                <p>{product.description}</p>

                <Link to={`/product/${product._id}`}> {product.title} </Link>
            </div>
    )})
                }
    </div>
    );
}
export default ProductList;