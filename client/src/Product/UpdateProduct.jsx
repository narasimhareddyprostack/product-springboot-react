import React, { useState, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Axios from 'axios'

const UpdateProduct = () => {
    let [product, setProduct] = useState({ name: "", price: "", qty: "", info: "" })
    let [productId, setProductId] = useState(useParams().id);
    let [flag, setFlag] = useState(false);
    useEffect(() => {
        let url = `http://localhost:8080/products/${productId}`
        Axios.get(url).then((res) => {
            setProduct(res.data)
        }).catch()
    }, []);
    let updateProductHandler = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value })
    }
    let productHandler = (event) => {
        event.preventDefault()
        let url = "http://localhost:8080/product"
        Axios.post(url, product).then(() => {
            setFlag(true)
        }).catch(() => { })
    }
    return (
        <div className="container mt-5">
            <h1>Test</h1>
            <pre>{JSON.stringify(product)}</pre>
            <div className="row">
                {
                    flag ? <>
                        <Navigate to="/admin" />
                    </> : <> <div className="col-md-5">
                        <div className="card">
                            <div className="card-header">
                                <h3>Update Product</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={productHandler}>
                                    <div className='form-group'>
                                        <input className='form-control' type="text" value={product.name} name="name" onChange={updateProductHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <input className='form-control' type="text" value={product.price} name="price" onChange={updateProductHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <input className='form-control' type="text" value={product.qty} name="qty" onChange={updateProductHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <input className='form-control' type="text" value={product.info} name="info" onChange={updateProductHandler} />
                                    </div>
                                    <input type="submit" className="btn btn-warning" value="Update" />
                                </form>
                            </div>
                        </div>
                    </div></>
                }

            </div>
        </div>
    )
}

export default UpdateProduct
