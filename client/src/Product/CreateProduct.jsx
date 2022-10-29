import React, { useState } from 'react'
import Axios from 'axios'
let CreateProduct = () => {
    let [product, setProduct] = useState({
        name: "",
        price: "",
        qty: "",
        info: ""
    });
    let updateProductHandler = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value })
    }
    let productHandler = (event) => {
        let url = "http://localhost:8080/product"
        Axios.post(url, product).then(() => { }).catch(() => { })
    }
    return <div className="container mt-5">
        <pre>{JSON.stringify(product)}</pre>
        <div className="row">
            <div className="col-md-5">
                <div className="card">
                    <div className="card-header bg-primary text-white">
                        <h3>Create Product</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={productHandler}>
                            <div className="form-group">
                                <input placeholder="Product Name" type="text" className="form-control" name="name" onChange={updateProductHandler} />
                            </div>
                            <div className="form-group">
                                <input placeholder="Price" type="number" className="form-control" name="price" onChange={updateProductHandler} />
                            </div>
                            <div className="form-group">
                                <input placeholder="Qty" type="number" className="form-control" name="qty" onChange={updateProductHandler} />
                            </div>
                            <div className="form-group">
                                <input placeholder="Information" type="text" className="form-control" name="info" onChange={updateProductHandler} />
                            </div>
                            <div>
                                <input type="submit" value="Create Product" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default CreateProduct