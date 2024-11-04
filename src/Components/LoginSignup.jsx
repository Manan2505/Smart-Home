import React, { useState } from 'react';
import './LoginSingup.css';

const LoginSignup = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const showLoginForm = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const showSignupForm = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  const closeForm = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  return (
    <div className='bttn-container space-x-4'>
      <button className="bttn" onClick={showLoginForm}>Login</button>
      <button className="bttn" onClick={showSignupForm}>Signup</button>

      {showLogin && (
        <div className="overlay" onClick={closeForm}>
          <form className="form bg-purple-600 p-5 rounded-lg" onClick={(e) => e.stopPropagation()}>
            <h1 className="text-white">Login</h1>
            <label className="text-white" htmlFor="loginEmail">Email:</label>
            <input type="email" id="loginEmail" name="loginEmail" required className="p-2 rounded bg-purple-400 w-full" />
            <label className="text-white" htmlFor="loginPassword">Password:</label>
            <input type="password" id="loginPassword" name="loginPassword" required className="p-2 rounded bg-purple-400 w-full" />
            <button type="submit" className="bg-purple-700 text-white rounded p-2">Login</button>
          </form>
        </div>
      )}

      {showSignup && (
        <div className="overlay" onClick={closeForm}>
          <form className="form bg-purple-600 p-5 rounded-lg" onClick={(e) => e.stopPropagation()}>
            <h1 className="text-white">Signup</h1>
            <label className="text-white" htmlFor="signupName">Name:</label>
            <input type="text" id="signupName" name="signupName" required className="p-2 rounded bg-purple-400 w-full" />
            <label className="text-white" htmlFor="signupEmail">Email:</label>
            <input type="email" id="signupEmail" name="signupEmail" required className="p-2 rounded bg-purple-400 w-full" />
            <label className="text-white" htmlFor="signupPassword">Password:</label>
            <input type="password" id="signupPassword" name="signupPassword" required className="p-2 rounded bg-purple-400 w-full" />
            <button type="submit" className="bg-purple-700 text-white rounded p-2">Signup</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;
