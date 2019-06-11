import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'typeface-poppins';
import { Authenticator } from './components/Authenticator';
import Login from './components/Login';
import Home from './components/Home';
import { CustomThemeProvider } from './theme';

function App() {
  return (
    <Router>
      <CustomThemeProvider>
        <CssBaseline />
        <Authenticator>
          <Route path={'/login'} component={Login} />
          <Route path={'/home'} component={Home} />
        </Authenticator>
      </CustomThemeProvider>
    </Router>
  );
}

export default App;
