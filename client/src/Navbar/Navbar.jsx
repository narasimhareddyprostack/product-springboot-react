import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navar-brand">
            React With Spring Boot App
        </Link>
        <div className="ml-auto">
            <ul className="navbar-nav">
                <li className="nav-list"> <Link className="nav-link" to="/home"> Home </Link></li>
                <li className="nav-list"> <Link className="nav-link" to="/products"> Product </Link></li>
                <li className="nav-list"> <Link className="nav-link" to="/admin"> Admin </Link></li>
                <li className="nav-list"> <Link className="nav-link" to="/create"> Create Product </Link></li>
                <li className="nav-list"> <Link className="nav-link" to="/update/:id"> Update Product </Link></li>
            </ul>
        </div>
    </nav>
}

export default Navbar
