import React, { useState } from 'react';
import axios from 'axios';

const AuthPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/register', { name, email, password });
      alert(response.data.message);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 shadow rounded">
      <h2 className="text-center text-xl mb-4">Register</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="block w-full mb-2 p-2 border"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="block w-full mb-2 p-2 border"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="block w-full mb-2 p-2 border"
        required
      />
      <button type="submit" className="block w-full bg-blue-500 text-white p-2 mt-4">
        Register
      </button>
    </form>
  );
};

export default AuthPage;

