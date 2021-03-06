import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import { Context } from "../context/Context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(true);
  const { setUser, setLoggedin, setIsUpdating } = useContext(Context);
  let history = useHistory();

  // Login

  const handleLogin = (e) => {
    e.preventDefault();
    const postObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };
    fetch("/api/login", postObj)
      .then((r) => r.json())
      .then((user) => {
        if (!!user.id) {
          setUser(user);
          setLoggedin(true);
          setSuccess(true);
          history.push("success");
        } else {
          setSuccess(false);
        }
      })
      .catch((err) => console.log("error =", err));
  };

  // Renders forms with toggle for signin/signup
  return (
    <div>
      {setIsUpdating(false)}
      <Form onSubmit={handleLogin}>
        <Form.Field>
          <label>Email</label>
          <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            placeholder='password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>
        {success ? null : <h3 className='Alert'>Wrong email or password.</h3>}
        <Button primary type='submit'>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
