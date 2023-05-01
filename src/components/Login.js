import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({onLogin}){
const[formData, setFormData]=useState({
 username:"",
  password:""
})
const history =useHistory()
function handleChange(e){
  setFormData({
    ...formData ,
    [e.target.value]:e.target.value
  })
}

const url="http://localhost:3001/login"
function handleSubmit(e){
  e.preventDefault()
  fetch(url,{
    method:"POST",
    header:{
      "content-type" :"application/json",
    },
    body:JSON.stringify(formData)
  })
  .then((r)=>r.json())
  .then((user)=>(
    onLogin(user),
    history.push("/home")
  ))
}
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button  type="submit">Login</button>
    </form>
  );
  }

export default Login;
