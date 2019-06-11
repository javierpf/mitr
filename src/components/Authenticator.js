import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const AuthenticationContext = React.createContext();

const Authenticator = ({ children, history }) => {
  const [authState, setAuthState] = useState({
    loggedIn: false,
    verified: true,
    userData: {}
  });
  const loginUser = userData =>
    setAuthState({ loggedIn: true, verified: true, userData });
  // TODO also delete localStorage data if we ever store something there
  const logoutUser = () =>
    setAuthState({ loggedIn: false, verified: true, userData: {} });
  useEffect(() => {
    // If dependencies change, we make sure if user is still logged in.
    // If not, redirect to login
    if (authState.verified && !authState.loggedIn) {
      history.push('/login');
    }
  }, [authState.verified, authState.loggedIn, history]);
  return (
    <AuthenticationContext.Provider
      value={{ authState, loginUser, logoutUser }}
    >
      {!authState.verified && <h1>Loading</h1>}
      {authState.verified && children}
    </AuthenticationContext.Provider>
  );
};
const AuthenticatorWithRouter = withRouter(Authenticator);
export { AuthenticatorWithRouter as Authenticator, AuthenticationContext };
