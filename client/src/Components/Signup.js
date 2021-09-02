import React, { useState, useContext } from "react";
import { Context } from "../context/Context";
import { useHistory } from 'react-router-dom'
import { Button, Form } from "semantic-ui-react";


const Signup = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()
    const { user, setUser, loggedin, setLoggedin} = useContext(Context)
  
    const handleSignup = (e) => {
      e.preventDefault()
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      })
        .then((r) => r.json())
        .then((user) => {
            console.log(user)
          setUser(user)
          setLoggedin(true)
          history.push('/top_content')
        })
        .catch((err) => console.log(err))
    }

  return (
    // Username, email and password required!
    <div>
      <Form onSubmit={handleSignup}>
        <Form.Field>
          <label>Username</label>
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Field>
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>
        <Form.Field></Form.Field>
        <Button primary type="submit">Signup</Button>
      </Form>
    </div>
  );
};

export default Signup;
