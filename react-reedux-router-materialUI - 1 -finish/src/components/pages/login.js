import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { firebaseApp } from '../firebase'
import PropTypes from 'prop-types'
import { Avatar, Button, CssBaseline, FormControl, 
         FormControlLabel, Checkbox, Input, InputLabel,
         Typography, Paper} from '@material-ui/core'
import LockIcon from '@material-ui/icons/LockOutlined'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'inline', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 25,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  label: {
    marginTop: theme.spacing.unit * 3,
  },
});

class SignIn extends Component {

constructor (props){
  super(props);
  this.state = {
    email:'',
    password: '',
    error: {
      message: ''
    }
  }
}

signIn = () => {
  console.log('this.state', this.state);

  const { email, password } = this.state;

  firebaseApp.auth().signInWithEmailAndPassword(email, password)
  .catch(error =>
    this.setState({error})
    )
}
  
  render() {
    const { classes } = this.props;

      return (
        <Fragment>
          <main className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form className={classes.form}>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="email">Email Address</InputLabel>
                  <Input 
                    id="email" 
                    name="email" 
                    autoComplete="email" 
                    onChange={event => this.setState({email: event.target.value})}
                    autoFocus 
                  />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input 
                    name="password" 
                    type="password" 
                    id="password" 
                    autoComplete="current-password"
                    onChange={event => this.setState({password: event.target.value})} 
                  />
                </FormControl>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  component="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={() => this.signIn()}
                >
                  Sign in
                </Button>
                <p>
                {this.state.error.message}
                </p>
                <div className={classes.label}>
                <p>Don't have an account?
                  <Link to={'./signup'}> Sign Up Instead</Link>
                </p>
                </div>
              </form>
            </Paper>
          </main>
        </Fragment>
      );
    }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);