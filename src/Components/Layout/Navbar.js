import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='container-fluid bg-dark'>
                <div className='row'>
                    <div className='col-md-3 text-center imagehover'>
                        <Link className="navbar-brand  fs-3 fw-bold text-white imagehover" to="/">Online Shop Nepal</Link>
                    </div>
                    <div className='col-md-6'>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-danger" type="submit">Search</button>
                        </form>
                    </div>
                    <div className='col-md-3 d-flex justify-content-evenly'>
                        <Link to="/login" className='imagehover'><i className='bi bi-box-arrow-in-left text-warning fs-3'></i></Link>
                        <Link to="/register" className='imagehover'><i className='bi bi-person-plus text-white  fs-3 '></i></Link>
                        <Link to="/cart" className='imagehover'><i className='bi bi-cart fs-3 text-danger fs-3'></i></Link>

                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-warning">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link hovertitle imagehover" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link hovertitle imagehover" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link hovertitle imagehover" to="/faq">FAQ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link hovertitle imagehover" to="/aboutus">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link hovertitle imagehover" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link hovertitle imagehover" to="/counter">Counter</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link hovertitle imagehover" to="/data">Data</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link hovertitle imagehover" to="/context">Global Context</Link>
                            </li> */}
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar