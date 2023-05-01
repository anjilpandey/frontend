import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Layout/Navbar'

const Login = () => {
    return (
        <>
            <Navbar />
            
                <div className='row'>
                <div className='col-md-6 p-5 m-auto shadow-lg my-5'>
            <main className="form-signin m-auto">
                <form>
                    <div className='text-center'>
                    <img className="" src="./LoginImage/insta_kinniho.png" alt="" width="130" height="100"/>
                    </div>
                        <h1 className="h3 mb-3 fw-bold text-center text-primary">Login</h1>

                        <div className="form-floating my-2">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label htmlFor ="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating my-2">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                <label htmlFor ="floatingPassword">Password</label>
                        </div>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me"/> Remember me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary hoverclass" type="submit">Sign in</button>
                        <div className='d-flex my-2 justify-content-between'>
                        <span>Don't have an account ? <Link to="/register">Register</Link></span>
                        <span><Link to="/forgetpassword">Forgot Password ? </Link></span>
                        </div>
                </form>
            </main>
            </div>
            </div>
            
        </>

    )
}

export default Login