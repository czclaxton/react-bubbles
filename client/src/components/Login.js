import React, { useState } from "react";
import axios from "axios";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const handleChange = e => {
    return setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const routeToBubblePage = () => {
    props.history.push("/colors");
  };

  const login = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", {
        username: "Lambda School",
        password: "i<3Lambd4"
      })
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        routeToBubblePage();
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
