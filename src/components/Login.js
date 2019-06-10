import React from 'react';
import GoogleLogin from 'react-google-login';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to right, #757f9a, #d7dde8)'
  },
  card: {
    maxWidth: 345,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    borderRadius: 8
  },
  media: {
    height: 140
  },
  googleButton: {
    color: theme.palette.getContrastText('#D44638'),
    backgroundColor: '#D44638',
    '&:hover': {
      backgroundColor: '#B23121'
    }
  },
  facebookButton: {
    marginTop: theme.spacing(),
    marginBottom: theme.spacing(),
    color: theme.palette.getContrastText('#3b5998'),
    backgroundColor: '#3b5998',
    '&:hover': {
      backgroundColor: '#2f477a'
    }
  },
  bottomText: {
    display: 'flex',
    justifyContent: 'center'
  },
  links: {
    display: 'contents',
    color: '#868686',
    '&:hover': {
      color: '#656565'
    }
  }
}));
const responseGoogle = data => console.log(data);

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="http://www.solucionespm.com/wp-content/uploads/2015/11/Pepsi-logo.png"
          title="Logo"
        />
        <CardContent>
          <Typography align="center" gutterBottom variant="subtitle2">
            Podés ingresar usando:
          </Typography>
          <GoogleLogin
            clientId="668400214836-kdd6a0v1d2tvkjke8lrffer20mr77uf7.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            render={renderProps => (
              <Button
                className={classes.googleButton}
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Google
              </Button>
            )}
          />
          <Button
            fullWidth
            variant="contained"
            className={classes.facebookButton}
          >
            Facebook
          </Button>
          <Typography
            className={classes.bottomText}
            align="center"
            variant="caption"
          >
            Al loguearte, estás de acuerdo con los{' '}
            <a
              className={classes.links}
              href="https://i.imgflip.com/17urgs.jpg"
              target="_blank"
            >
              Términos de uso
            </a>{' '}
            y la{' '}
            <a
              className={classes.links}
              href="https://meme.xyz/uploads/posts/t/l-27850-is-this-an-updated-privacy-policy.jpg"
              target="_blank"
            >
              Política de Privacidad
            </a>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
