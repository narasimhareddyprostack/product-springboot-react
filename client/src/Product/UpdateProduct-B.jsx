import React, { useState, useEffect, useParams } from 'react'
import Axios from 'axios'
const UpdateProduct = () => {
    let [product, SetProduct] = useState({})
    let [productId, setProductId] = useState(useParams().id);
    useEffect(() => {
        let url = `http://localhost:8080/products/${productId}`
        Axios.get(url).then((response) => {
            SetProduct(response.data)
        }).catch(() => { })
    }, []);
    return <div className="container">
     {/*    <pre>{JSON.stringify(product)}</pre> */}
        <div className="row">
            <div className="col-md-5">
                <h1>Test</h1>
            </div>
        </div>
    </div>
}

export default UpdateProduct
