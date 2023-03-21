import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: ""
    });
    // if I leave default state to be () or ({}), the browser console warns me that a component is forcing 
    // an uncontrolled input to be controller "which should not happen"
    const {products, setProducts} = props;
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title: product.title,
            price: product.price,
            description: product.description
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                setProducts([...products, res.data]);
            })
            .catch(err => console.log(err))
        setProduct({
            title: "",
            price: "",
            description: ""
        });
    }
    return (
        <div className="mx-auto col-md-4">
            <h4 className="text-center">Add A New Product</h4>
            <form onSubmit={ onSubmitHandler }>
                <div className="form-group"> {/* I recognize that this was a longer way to set state by having it be an object but i wanted to practice! */}
                    <label>Title: </label>
                    <input type="text" onChange={(e)=>setProduct({...product, title: e.target.value})} className="form-control mb-2" value={product.title}/>
                </div>
                <div className="form-group"> 
                    <label>Price: </label>
                    <input type="text" onChange={(e)=>setProduct({...product, price: e.target.value})} className="form-control mb-2" value={product.price}/>
                </div>
                <div className="form-group"> 
                    <label>Description: </label>
                    <input type="text" onChange={(e)=>setProduct({...product, description: e.target.value})} className="form-control mb-2" value={product.description}/>
                </div>
                <input type="submit" value="Create Product" className="btn btn-secondary align-self-end"/>
            </form>
        </div>
    )
}
export default ProductForm;