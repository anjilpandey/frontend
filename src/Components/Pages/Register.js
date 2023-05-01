import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Layout/Navbar'
import { userRegister } from '../../api/userApi'

const Register = () => {

    let [username, setUsername] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    let [error, setError] = useState('')
    let [success, setSuccess] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        userRegister(username, email, password)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                    setSuccess(false)
                }
                else {
                    setSuccess(true)
                    setError('')
                }
            })
    }

    const showError = () => {
        if (error) {

            return <div className='alert alert-danger'>
                {error}
            </div>
        }
    }
    const showSuccess = () => {
        if(success){
            return <div className='alert alert-danger'>User Registered Successfully. Please check email for verification.</div>
        }

    }

    return (
        <>
            <Navbar />
            {showError()}
            {showSuccess()}
            <div className='row'>
                <div className='col-md-6 p-5 m-auto shadow-lg my-5'>
                    <main className="form-signin m-auto">
                        <form>
                            <div className='text-center'>
                                <img className="" src="./LoginImage/insta_kinniho.png" alt="" width="130" height="100" />
                            </div>
                            <h1 className="h3 mb-3 fw-bold text-center text-primary">Register!</h1>
                            <div className="form-floating my-2">
                                <input type="text" className="form-control" id="floatingInputFName" placeholder="UserName" onChange={(e) => {setUsername(e.target.value) }
                                } />
                                <label htmlFor="floatingInputFName">User Name</label>
                            </div>
                            {/* <div className="form-floating my-2">
                                <input type="text" className="form-control" id="floatingInputLName" placeholder="Last Name" />
                                <label htmlFor="floatingInputLName">Last Name</label>
                            </div> */}
                            <div className="form-floating my-2">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => {setEmail(e.target.value) }} />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            {/* <div className='form-floating my-2'>
                                <input type="date" className='form-control' id='dob' placeholder='dateofbirth'/>
                                <label htmlFor='dob'>Date of Birth</label>
                            </div>
                            <div className="form-floating">
                                <div className="form-control d-flex justify-content-evenly">
                                <div>
                                <input type="radio"  id='male' name='gender' className='me-2' />
                                <label htmlFor='male'>Male</label>
                                </div>
                                <div>
                                <input type="radio"  id='female' name='gender' className='me-2' />
                                <label htmlFor='female'>Female</label>
                                </div>
                                <div>
                                <input type="radio"  id='other' name='gender' className='me-2' />
                                <label htmlFor='other'>Other</label>
                                </div>
                                </div>
                                <label>Gender</label> 
                             </div> */}
                            <div className="form-floating my-2">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            {/* <div className="form-floating my-2">
                                <input type="password" className="form-control" id="cfloatingPassword" placeholder="cPassword" />
                                <label htmlFor="cfloatingPassword">Confirm Password</label>
                            </div> */}
                            <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me" /> I accept the terms & conditions.
                                </label>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary hoverclass mb-2" type="submit" onClick={handleSubmit}>Register</button>
                            <div className='d-flex justify-content-between'>
                            <span>Already have an account ? <Link to="/login">Login</Link></span>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Register