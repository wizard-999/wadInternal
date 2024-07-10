import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data.msg);
    }
  };

  return (
    <main className="container mt-5">
      <form className="mx-auto w-50" onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Login</h2>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-dark w-100">Login</button>
      </form>
    </main>
  );
};

export default Login;
