import React, { useState, useContext } from "react"
import { useHistory } from 'react-router-dom'
import { Button, Form } from "semantic-ui-react"
import {Context } from '../context/Context'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { user, setUser, loggedin, setLoggedin} = useContext(Context)
  let history = useHistory()

  const handleLogin = (e) => {
    e.preventDefault()
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((r) => r.json())
      .then((user) => {
        if (!!user.id) {
        console.log("Log in: ", user)
        setUser(user)
        setLoggedin(true)
        history.push('/profile')
      }})
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <Form onSubmit={handleLogin}>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input 
          placeholder="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        </Form.Field>
        <Form.Field></Form.Field>
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
};

export default Login;
