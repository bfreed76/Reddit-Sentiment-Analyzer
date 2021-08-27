import React from "react";
import { Button, Form } from "semantic-ui-react";
import { useState } from "react";

const Login = (onLogin) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    }).then(((res) => res.json()).then((user) => onLogin(user))); //onLogin CB to app
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
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
          <input placeholder="someone@somewhere.com" />
        </Form.Field>
        <Form.Field></Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Login;
