import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/Context";
import { useHistory } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";

const Signup = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { user, setUser, loggedin, setLoggedin, isUpdating, setIsUpdating } = useContext(Context);

  // Sets local state to global state on component render

  useEffect(() => {
    setUsername(user.username);
    setEmail(user.email);
  }, [user.username, user.email]);

  // Handles signup with input error handling

  const handleSignup = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      return console.log("field(s) missing");
    }
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
        history.push("success");
      })
      .catch((err) => console.log(err));
  };

  // Handles update of user profile information

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
        setIsUpdating(false);
        history.push("success");
      })
      .catch((err) => console.log("Update err = ", err));
  };

  // Renders either login or signup information depending on state

  return (
    <div>
      {!loggedin ? setIsUpdating(false) : null}
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
          <>
            <h3>Please enter new username or email.</h3>
          </>
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
          <>
            <p style={{ textAlign: "right" }}>* All fields required</p>
            <Button primary type='submit'>
              Signup
            </Button>
          </>
        )}
      </Form>
    </div>
  );
};

export default Signup;
