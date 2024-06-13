import React, { useState } from 'react'

const Login = () => {

    const [data, setData] = useState(

        {
            "name": "",
            "email": "",
            "password": ""
        }


    )

    const inputHandler = (event) => {

        setData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(data)
    }


    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">

                            <h2 className="text-center">Login</h2>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12s">

                                <label htmlFor="" className="form-label">User Name</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>


                            </div>



                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12s">

                                <label htmlFor="" className="form-label">Email ID</label>
                                <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler}/>


                            </div>



                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12s">

                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" className="form-control" name='password' value={data.password} onChange={inputHandler}/>


                            </div>


                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12s">

                                <button className="btn btn-success" onClick={readValue}>login</button>

                            </div>


                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12s">

                                <h5>or <a href="#">Sign Up</a> here</h5>

                            </div>


                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login