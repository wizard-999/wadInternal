import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        phoneNumber: '',
        dateOfBirth: '',
        gender: '',
        username: '',
        profilePicture: null
    });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', user);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data.msg);
    }
  };

  return (
    <main className="container mt-5">
      <form className="mx-auto w-50" onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Register</h2>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value={user.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" name="password" value={user.password} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input type="password" className="form-control" name="cpassword" value={user.confirmPassword} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input type="text" className="form-control" name="address" value={user.address} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">City</label>
          <input type="text" className="form-control" name="city" value={user.city} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">State</label>
          <input type="text" className="form-control" name="state" value={user.state} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Zipcode</label>
          <input type="text" className="form-control" name="zipcode" value={user.zipCode} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Country</label>
          <input type="text" className="form-control" name="country" value={user.country} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input type="text" className="form-control" name="phone" value={user.phone} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input type="text" className="form-control" name="dob" value={user.dateOfBirth} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Gender: 
            <select>
            <option value="select">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" className="form-control" name="username" value={user.username} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Profile Picture: </label>
          <input type="file" name="profilePicture" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-dark w-100">Register</button>
      </form>
    </main>
  );
};

export default Register;
