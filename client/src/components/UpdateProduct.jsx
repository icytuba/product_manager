import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const UpdateProduct = (props) => {
    const {deleteProduct} = props;
    const {_id} = useParams();
    const [product, setProduct] = useState({
        title:"",
        price:"",
        description:""
    });
    const navigate = useNavigate();
    useEffect( () => {
        axios.get('http://localhost:8000/api/products/' + _id)
        .then(res => setProduct(res.data))
        .catch(err => console.log(err))
    }, [])
    const submitUpdate = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + _id, product)
        // {
        //     title: product.title,
        //     price: product.price,
        //     description: product.description
        // })
            .then(res => {
                console.log(res);
                console.log(product);
                navigate('/');
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="mx-auto col-md-4">
            <h4 className="text-center">Edit {product.title}</h4>
            <form onSubmit={ submitUpdate }>
                <div className="form-group">
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
                <input type="submit" value="Update Product" className="btn btn-secondary me-2"/>
                <button onClick={(e) => {deleteProduct(product._id)}} className="btn btn-warning">Delete</button>
                {/* <Link to={deleteProduct(product._id)}>Delete</Link> */}
                {/* this ^ didn't work -- well it worked but it lingered on the update product page and
                didn't automatically navigate to the '/' screen like button somehow does... maybe something 
                to do with the onClick default functionality? or button, like how submit default-ly refreshes page */}
            </form>
        </div>
    )
}
export default UpdateProduct;