import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';

const ProductDetail = (props) => {
    const [product, setProduct] = useState({});
    const {deleteProduct} = props;
    const {_id} = useParams();
    const navigate = useNavigate();
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
            <button onClick={(e) => navigate(`/products/edit/${product._id}`)} className="btn btn-success me-2">Edit</button>
            <button onClick={(e) => {deleteProduct(product._id); navigate('/')}} className="btn btn-warning">Delete</button>
            {/* NOT sure why, but I need to do useNavigate here to redirect to / homepage when you click the button
            even though it automatically redirects to home in the UpdateProduct component -- must be because
            it's in a form??? -- just tested it and this is why, but idk actually ~why~ */}
        </div>
    )
}
export default ProductDetail;