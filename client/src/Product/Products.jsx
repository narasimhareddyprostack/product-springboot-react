import React, { useState, useEffect } from 'react'
import Axios from 'axios'
const Products = () => {
    let [products, setProducts] = useState([])
    useEffect(() => {
        let url = "http://localhost:8080/products"
        Axios.get(url).then((response) => {
            setProducts(response.data)
        }).catch()
    }, []);
    return (
        <div className="container">
            <h1>Display Product</h1>
            <pre>{JSON.stringify(products)}</pre>
            <div className="row">
                {
                    products.length > 0 ? <>
                        {
                            products.map((product) => {
                                return <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <ul className="list-group">
                                                <li className="list-group-item">{product.name}</li>
                                                <li className="list-group-item">{product.price}</li>
                                                <li className="list-group-item">{product.qty}</li>
                                                <li className="list-group-item">{product.info}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </> : null
                }
            </div>
        </div>
    )
}

export default Products
