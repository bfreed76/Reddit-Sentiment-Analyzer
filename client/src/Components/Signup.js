import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";


const Signup = ({ setUser, setLoggedin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
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
          setUser(user)
          setLoggedin(true)
          //history.push(?) See lesson
        })
        .catch((err) => console.log(err))
    }

  return (
    // Username, email and password required!
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
