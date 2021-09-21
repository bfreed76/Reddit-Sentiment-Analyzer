import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import { Context } from "../context/Context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(true);
  const { setUser, setLoggedin, isUpdating, setIsUpdating } = useContext(Context);
  let history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
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
          console.log("Log in: ", user);
          setUser(user);
          setLoggedin(true);
          setSuccess(true);
          history.push("success");
        } else {
          setSuccess(false);
        }
      })
      .catch((err) => console.log(err));
  };

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
