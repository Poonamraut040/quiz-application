// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const storedUsername = localStorage.getItem('username');
//     const storedPassword = localStorage.getItem('password');

//     if (username === storedUsername && password === storedPassword) {
//       // Navigate to quiz or dashboard if login is successful
//       navigate('/quiz');
//     } else {
//       alert('Invalid username or password');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#B9D9EB]">
//       <div className="bg-[#F0F8FF] rounded-lg shadow-lg p-8 w-full max-w-md">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login to Your Account</h2>
//         <form onSubmit={handleLogin}>
//           {/* Username Input */}
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="username">Username</label>
//             <input
//               id="username"
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//               placeholder="Enter your username"
//               required
//             />
//           </div>

//           {/* Password Input */}
//           <div className="mb-6">
//             <label className="block text-gray-700 font-medium mb-2" htmlFor="password">Password</label>
//             <input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
//           >
//             Login
//           </button>
//         </form>

//         {/* Additional Links */}
//         <p className="text-center text-gray-600 mt-6">
//           Don’t have an account?{' '}
//           <a href="/signup" className="text-blue-600 font-medium hover:underline">Signup</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
      // Navigate to quiz or dashboard if login is successful
      navigate('/quiz');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#B9D9EB] px-4 sm:px-6 lg:px-8">
      <div className="bg-[#F0F8FF] rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">Login to Your Account</h2>
        <form onSubmit={handleLogin}>
          {/* Username Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Additional Links */}
        <p className="text-center text-gray-600 mt-6">
          Don’t have an account?{' '}
          <a href="/signup" className="text-blue-600 font-medium hover:underline">Signup</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
