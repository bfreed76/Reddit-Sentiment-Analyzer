import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/Context";
import { useHistory } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";

const Signup = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { user, setUser, setLoggedin, isUpdating, setIsUpdating } = useContext(Context);

  useEffect(() => {
    setUsername(user.username);
    setEmail(user.email);
  }, [user.username, user.email]);

  const handleSignup = (e) => {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then((r) => r.json())
      .then((user) => {
        console.log(user);
        setUser(user);
        setLoggedin(true);
        history.push("/top_content");
      })
      .catch((err) => console.log(err));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch("/update", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("Response from update **:  ", res);
        setIsUpdating(false);
        history.push("/success");
      })
      .catch((err) => console.log("Update err = ", err));
  };

  return (
    <div>
      <Form onSubmit={handleSignup}>
        <Form.Field>
          <label>Username</label>
          <input
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Field>
        {isUpdating ? (
          <h3>Please enter new username or email.</h3>
        ) : (
          <Form.Field>
            <label>Password</label>
            <input
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Field>
        )}
        <Form.Field></Form.Field>
        {isUpdating ? (
          <Button primary onClick={handleUpdate}>
            Update
          </Button>
        ) : (
          <Button primary type='submit'>
            Login
          </Button>
        )}
      </Form>
    </div>
  );
};

export default Signup;
