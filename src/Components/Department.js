import React from 'react'
import { Link } from 'react-router-dom'

const Department = () => {
    return (
        <>
            <h4 class="container-fluid bg-danger text-center fw-bolder my-3"><Link className='text-white text-decoration-none ' to="#">DEPARTMENTS</Link></h4>
            <div className="d-flex justify-content-evenly py-3">
            <div className=" container card-group my-4 m-auto ">
                <div className="card">
                    <img src="./Department-images/dimage1.jpeg" className="card-img-top department-image imagehover " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center"><Link className='text-decoration-none hovertitle' to="#">Winter Products</Link></h5>
                        <button class="container-fluid btn btn-primary hoverclass" type="submit">View Products</button>
                        {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="./Department-images/dimage2.jpeg" className="card-img-top department-image imagehover" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center"><Link className='text-decoration-none hovertitle' to="#">Skin Care Products</Link></h5>
                        <button class="container-fluid btn btn-primary hoverclass" type="submit">View Products</button>
                        {/* <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p> */}
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="./Department-images/dimage3.jpeg" className="card-img-top department-image imagehover" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center"><Link className='text-decoration-none hovertitle' to="#">Accessories</Link></h5>
                        <button class="container-fluid btn btn-primary hoverclass" type="submit">View Products</button>
                        {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p> */}
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Department