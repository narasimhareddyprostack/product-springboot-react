import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import axios from 'axios';
const Admin = () => {
    let [products, setProducts] = useState([]);
    useEffect(() => {
        let url = "http://localhost:8080/products"
        Axios.get(url).then((res) => {
            setProducts(res.data)
        }).catch()
    }, [])

    let deleteProduct = (id) => {
        let url = `http://localhost:8080/product/${id}`
        axios.delete(url).then(() => { }).catch(() => { })
    }
    return <div className='container mt-5'>
        <div className="row">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos maiores optio cumque ipsum neque quas consequuntur error, vitae dolores fugiat laboriosam reiciendis non aut iure officia, ipsa facilis doloremque delectus.</p>
        </div>
        <div className="row">
            <Link to="/create" className="btn btn-success">Create Product</Link>
        </div>
        <div className="row">
            <pre>{JSON.stringify(products)}</pre>
            <div className="col-md-8">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.length > 0 ? <>

                                {
                                    products.map((product, index) => {
                                        return <tr key={index}>
                                            <td>{product.id}</td>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td>{product.qty}</td>
                                            <td>
                                                <Link to={`/update/${product.id}`} className="btn btn-warning">Update</Link>
                                                <Link className="btn btn-danger" onClick={deleteProduct.bind(this, product.id)}>Delete</Link>
                                            </td>
                                        </tr>
                                    })
                                }
                            </> : null
                        }
                    </tbody>
                </table>

            </div>
        </div>
    </div>
}

export default Admin
