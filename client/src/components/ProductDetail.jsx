import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const ProductDetail = (props) => {
    const [product, setProduct] = useState({});
    const {_id} = useParams();
    useEffect( () => {
        axios.get("http://localhost:8000/api/products/" + _id)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <div className="mx-auto col-md-4">
            <h4>{product.title}</h4>
            <p>${product.price}</p>
            <p>{product.description}</p>
        </div>
    )
}
export default ProductDetail;