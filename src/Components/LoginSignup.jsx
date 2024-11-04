import React, { useState } from 'react';
import './LoginSingup.css'
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
    <div className='bttn-container'>
      <button className="bttn" onClick={showLoginForm}>Login</button>
      <button className="bttn" onClick={showSignupForm}>Signup</button>

      {showLogin && (
        <div className="overlay" onClick={closeForm}>
          <form className="form" onClick={(e) => e.stopPropagation()}>
            <h1>Login</h1>
            <label htmlFor="loginEmail">Email:</label>
            <input type="email" id="loginEmail" name="loginEmail" required />
            <label htmlFor="loginPassword">Password:</label>
            <input type="password" id="loginPassword" name="loginPassword" required />
            <button type="submit">Login</button>
          </form>
        </div>
      )}

      {showSignup && (
        <div className="overlay" onClick={closeForm}>
          <form className="form" onClick={(e) => e.stopPropagation()}>
            <h1>Signup</h1>
            <label htmlFor="signupName">Name:</label>
            <input type="text" id="signupName" name="signupName" required />
            <label htmlFor="signupEmail">Email:</label>
            <input type="email" id="signupEmail" name="signupEmail" required />
            <label htmlFor="signupPassword">Password:</label>
            <input type="password" id="signupPassword" name="signupPassword" required />
            <button type="submit">Signup</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;
