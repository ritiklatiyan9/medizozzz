import React, { useState } from 'react';
import {  toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Dummy user data (you could replace this with a database in a real application)
  const users = [
    
    { email: 'admin@gmail.com', password: 'medicozzz' },
    
  ];
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      toast.success('Login successful!');
      // Redirect or do something else after successful login
    } else {
      toast.error('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-pink-300 bg-opacity-30  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-200 border-opacity-40 rounded-lg p-8 shadow-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-black">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 bg-gray-100 border border-gray-500 placeholder-gray-500 text-gray-00 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 bg-gray-100 border border-gray-500 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>





         
                       
            <button
              type="submit"
              
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>

        
          



          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
