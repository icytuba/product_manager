import React, { useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const ProductList = (props) => {
    const {products, setProducts, deleteProduct} = props;
    useEffect( () => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log(res.data); 
                // ^ this was causing an infinite console logging of the collection of products
                // before I added the empty array parameter to the useEffect function
                setProducts(res.data);
            })
            .catch(err => console.log(err))
    }, [])
    // const deleteProduct = (id) => {
    //     axios.delete('http://localhost:8000/api/products/' + id)
    //         .then(res => removeFromDom(id))
    //         .catch(err => console.log(err))
    // }
    return (
        <div className="mx-auto col-md-4 text-center">
            <h4>All Products</h4>
            {
                products.map( (product, index) => {
                    return (
                        <div key={index}>
                            <p>{product.title} - 
                                <Link to={`/products/${product._id}`}> See More </Link> | 
                                <Link to={`/products/edit/${product._id}`}> Edit </Link> | 
                                <button onClick={(e) => {deleteProduct(product._id)}} className="btn">Delete</button>
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ProductList;