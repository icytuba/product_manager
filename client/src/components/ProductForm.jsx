import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [product, setProduct] = useState({
        title: "",
        price: 0,
        description: ""
    })
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title: product.title,
            price: product.price,
            description: product.description
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => console.log(err))
        setProduct({
            title: "",
            price: 0,
            description: ""
        })
    }
    return (
        <form onSubmit={ onSubmitHandler } className="mx-auto col-md-4">
            <div className="form-group"> {/* I recognize that this was a longer way to set state by having it be an object but i wanted to practice! */}
                <label type="text">Title: </label>
                <input type="text" onChange={(e)=>setProduct({...product, title: e.target.value})} className="form-control mb-2" value={product.title}/>
            </div>
            <div className="form-group"> {/* I recognize that this was a longer way to set state by having it be an object but i wanted to practice! */}
                <label type="text">Price: </label>
                <input type="text" onChange={(e)=>setProduct({...product, price: e.target.value})} className="form-control mb-2" value={product.price}/>
            </div>
            <div className="form-group"> {/* I recognize that this was a longer way to set state by having it be an object but i wanted to practice! */}
                <label type="text">Description: </label>
                <input type="text" onChange={(e)=>setProduct({...product, description: e.target.value})} className="form-control mb-2" value={product.description}/>
            </div>
            <input type="submit" value="Create Product" className="btn btn-secondary"/>
        </form>
    )
}
export default ProductForm;