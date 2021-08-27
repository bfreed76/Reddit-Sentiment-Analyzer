import React from "react";
import { Button, Form } from "semantic-ui-react";
import { useState } from "react";

const Login = ({onLogin}) => {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault()
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((r) => r.json())
      .then((user) => onLogin(user));
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
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
          <input placeholder="password" />
        </Form.Field>
        <Form.Field></Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Login;
