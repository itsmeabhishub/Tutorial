import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const handleLogin = () => {
        if(username === "admin" && password === "admin"){
            navigate("/admin")
        } else if(username === "manager" && password === "manager"){
            navigate("/manager")
        } else if(username === "user" && password === "user"){
            navigate("/user")
        } else {
            alert("Invalid credentials")
        }
    }
  return (
    <div>Login
        <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login