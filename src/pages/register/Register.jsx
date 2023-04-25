import React, { useContext, useState } from "react";
import "./register.css"
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [credentials, setCredentials] = useState({
        username:undefined,
        email:undefined,
        password:undefined,
    })

    const {loading,error,dispatch} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleChange= (e) => {
        setCredentials((prev) => ({...prev,[e.target.id] : e.target.value}))
    }

    const handleClick =  async e => {
       
        try{
            const res1 = await axios.post("/auth/register",credentials)
            
            
                navigate("/login")
          
        }catch(err){
            dispatch({type:"REGISTER_FAILURE",payload:err.response.data})
        }
    }

    return (
        <div className="register">
            <div className="lContainer">
        <input type="text" placeholder="username" id="username" onChange={handleChange} className="lInput" />
        <input type="text" placeholder="email" id="email" onChange={handleChange} className="lInput" />
        <input type="text" placeholder="phone" id="phone" onChange={handleChange} className="lInput" />
        <input type="text" placeholder="city" id="city" onChange={handleChange} className="lInput" />
        <input type="text" placeholder="country" id="country" onChange={handleChange} className="lInput" />
        <input type="password" placeholder="password" id="password" onChange={handleChange} className="lInput" />
        <button className="lButton" button={loading} onClick={handleClick}>Register</button>
        <a href="/login"><button className="lButton" >Already Registered? Login</button></a>
        {error && <span>{error.message}</span>}
            </div>
        </div>
    )
}

export default Register