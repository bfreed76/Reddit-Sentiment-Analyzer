import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import { Button, Form } from "semantic-ui-react";


const Signup = ({ setUser, setLoggedin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const history = useHistory()
  
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
          history.push('/profile')
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
        <Button type="submit">Signup</Button>
      </Form>
    </div>
  );
};

export default Signup;
