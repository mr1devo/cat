import axios from 'axios';
import './login.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function submit(e) {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in both email and password fields.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/login", { email, password });
      if (res.data === "exist") {
        history("/home", { state: { id: email } });
      } else if (res.data === "notexist") {
        alert("User has not signed up.");
      } else {
        setError("Incorrect email or password.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again later.");
    }
  }

  return (
    <div className="container">
      <div className="content">
        <h1>Login</h1>
        <form>
          Email<br />
          <input type="email" onChange={e => setEmail(e.target.value)} placeholder='Email' /><br />
          <br />
          Password<br />
          <input type="password" onChange={e => setPassword(e.target.value)} placeholder='Password' />
          <div className='form button'>
            <input type="submit" value="Login" onClick={submit} />
          </div>
          {error && <div className="error">{error}</div>}
        </form>
        <br />
        <p>OR</p>
        <div className="link">
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
