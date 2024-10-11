// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = (e) => {
//     e.preventDefault();
//     // Save user data in localStorage (as per your requirements)
//     localStorage.setItem('username', username);
//     localStorage.setItem('password', password);
//     // Navigate to login or quiz page
//     navigate('/login');
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#B9D9EB]">
//       <div className="bg-[#F0F8FF] rounded-lg shadow-lg p-8 w-full max-w-md">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
//         <form onSubmit={handleSignup}>
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

//           {/* Signup Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
//           >
//             Signup
//           </button>
//         </form>

//         {/* Additional Links */}
//         <p className="text-center text-gray-600 mt-6">
//           Already have an account?{' '}
//           <a href="/login" className="text-blue-600 font-medium hover:underline">Login</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Save user data in localStorage (as per your requirements)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    // Navigate to login or quiz page
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#B9D9EB] px-4 sm:px-6 lg:px-8">
      <div className="bg-[#F0F8FF] rounded-lg shadow-lg p-6 sm:p-8 w-full max-w-sm sm:max-w-md lg:max-w-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
        
        <form onSubmit={handleSignup}>
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

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 sm:py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Signup
          </button>
        </form>

        {/* Additional Links */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 font-medium hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
