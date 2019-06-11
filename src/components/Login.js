import React, { useContext, useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { AuthenticationContext } from './Authenticator';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(-45deg, #164b77, #b5ef8a)',
    minHeight: '100vh'
  },
  mainTitle: {
    marginBottom: theme.spacing(6),
    fontSize: 24,
    fontWeight: theme.typography.fontWeightLight
  },
  card: {
    // margin: theme.spacing(2),
    width: '90%',
    maxWidth: '960px',
    padding: '100px 130px 8px 95px',
    borderRadius: 10
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row'
  },
  leftContent: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightContent: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
  },
  media: { width: '80%' },
  input: {
    marginBottom: theme.spacing(2)
  },
  loginButton: {
    marginTop: theme.spacing(2)
  },
  loginWithTitle: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    color: theme.palette.grey[700]
  },
  loginWithContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  fontIcons: { fontSize: 28 },
  googleButton: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    marginRight: theme.spacing(),
    color: theme.palette.getContrastText('#D44638'),
    backgroundColor: '#D44638',
    '&:hover': {
      backgroundColor: '#B23121'
    }
  },
  facebookButton: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    color: theme.palette.getContrastText('#3b5998'),
    backgroundColor: '#3b5998',
    '&:hover': {
      backgroundColor: '#2f477a'
    }
  },
  createAccount: {
    cursor: 'pointer',
    marginTop: theme.spacing(7),
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.grey[700],
    '&:hover': {
      color: theme.palette.primary.dark
    }
  }
}));

const Login = ({ history }) => {
  const [creatingAccount, setCreatingAccount] = React.useState(false);
  const { setAuthState } = useContext(AuthenticationContext);
  // We make sure to logout user if they go to the Login
  // TODO delete data from localstorage if we ever store something there
  useEffect(
    () => setAuthState({ verified: true, loggedIn: false, userData: null }),
    [setAuthState]
  );
  const loginCallback = (data, success) => {
    console.log(data);
    setAuthState({ verified: true, loggedIn: success, userData: {} });
    if (success) {
      history.push('home');
    }
  };
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <div className={classes.leftContent}>
            <img
              className={classes.media}
              src="http://www.solucionespm.com/wp-content/uploads/2015/11/Pepsi-logo.png"
            />
          </div>
          <div className={classes.rightContent}>
            <Typography
              className={classes.mainTitle}
              align="center"
              variant="h6"
            >
              Ingresar a Ao Chupá
            </Typography>
            {creatingAccount && (
              <TextField
                className={classes.input}
                label="Nombre y apellido"
              ></TextField>
            )}
            <TextField className={classes.input} label="Email"></TextField>
            <TextField
              className={classes.input}
              label="Password"
              type="password"
            ></TextField>
            <Fab
              className={classes.loginButton}
              color="primary"
              variant="extended"
            >
              {creatingAccount ? 'Crear cuenta' : 'Login'}
            </Fab>

            {!creatingAccount && (
              <React.Fragment>
                <Typography
                  className={classes.loginWithTitle}
                  align="center"
                  variant="body2"
                >
                  También puedes ingresar utilizando:
                </Typography>
                <div className={classes.loginWithContainer}>
                  <GoogleLogin
                    clientId="668400214836-kdd6a0v1d2tvkjke8lrffer20mr77uf7.apps.googleusercontent.com"
                    onSuccess={data => loginCallback(data, true)}
                    onFailure={data => loginCallback(data, false)}
                    render={renderProps => (
                      <div
                        className={classes.googleButton}
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        <FontAwesomeIcon
                          className={classes.fontIcons}
                          icon={faGoogle}
                        />
                      </div>
                    )}
                  />
                  <div className={classes.facebookButton}>
                    <FontAwesomeIcon
                      className={classes.fontIcons}
                      icon={faFacebookF}
                    />
                  </div>
                </div>
              </React.Fragment>
            )}

            <Typography
              className={classes.createAccount}
              onClick={() => setCreatingAccount(prevState => !prevState)}
              align="center"
              variant="body2"
            >
              {creatingAccount
                ? 'Acceder con cuenta existente'
                : 'Crear una cuenta'}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
