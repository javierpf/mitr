import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const AuthenticationContext = React.createContext();

const Authenticator = ({ children, history }) => {
  const [authState, setAuthState] = useState({
    loggedIn: false,
    verified: true,
    userData: null
  });
  useEffect(() => {
    // If dependencies change, we make sure if user is still logged in.
    // If not, redirect to login
    if (authState.verified && !authState.loggedIn) {
      history.push('/login');
    }
  }, [authState.verified, authState.loggedIn, history]);
  return (
    <AuthenticationContext.Provider value={{ authState, setAuthState }}>
      {!authState.verified && <h1>Loading</h1>}
      {authState.verified && children}
    </AuthenticationContext.Provider>
  );
};
const AuthenticatorWithRouter = withRouter(Authenticator);
export { AuthenticatorWithRouter as Authenticator, AuthenticationContext };
