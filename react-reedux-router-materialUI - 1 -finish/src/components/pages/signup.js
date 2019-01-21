import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { firebaseApp } from '../firebase'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { CssBaseline, Paper, Button, Typography, Grid, TextField, FormControlLabel, Checkbox } from '@material-ui/core'

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'inline',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginRight:  theme.spacing.unit
  },
  label: {
    marginTop: theme.spacing.unit * 3,
  },
});

class SignUp extends Component {

  constructor (props) {
    super(props);
    this.state = {
      firstname:'',
      lastname:'',
      email:'',
      password: '',
      city:'',
      zip:'',
      coutry:'',
      error: {
        message: ''
      }
    }
  }

  signUp = () => {
    console.log('this.state', this.state);

    const { email, password } = this.state;

    firebaseApp.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
    .catch(error =>
      this.setState({error})
      )
  }

  render() {
    const { classes } = this.props;

    return (
      // <div className='bg'>
      <Fragment>
          <CssBaseline />
          <main className={classes.layout}>
            <Paper className={classes.paper}>
              <Typography component="h1" variant="h4" align="center">
                Sign Up
              </Typography>
              <Fragment>
                <Typography variant="h6" gutterBottom>
                  Sign Up
                </Typography>
                <Grid container spacing={24}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="firstName"
                      name="firstName"
                      label="First name"
                      fullWidth
                      autoComplete="fname"
                      onChange={event => this.setState({firstname: event.target.value})}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="lastName"
                      name="lastName"
                      label="Last name"
                      fullWidth
                      autoComplete="lname"
                      onChange={event => this.setState({lastname: event.target.value})}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="email"
                      name="email"
                      label="Email"
                      type="email"
                      fullWidth
                      autoComplete="email-line"
                      onChange={event => this.setState({email: event.target.value})}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      fullWidth
                      autoComplete="passwd"
                      onChange={event => this.setState({password: event.target.value})}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="city"
                      name="city"
                      label="City"
                      fullWidth
                      autoComplete="billing address-level2"
                      onChange={event => this.setState({city: event.target.value})}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField id="state" name="state" label="State/Province/Region" onChange={event => this.setState({state: event.target.value})} fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="zip"
                      name="zip"
                      label="Zip / Postal code"
                      fullWidth
                      autoComplete="billing postal-code"
                      onChange={event => this.setState({zip: event.target.value})}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="country"
                      name="country"
                      label="Country"
                      fullWidth
                      autoComplete="billing country"
                      onChange={event => this.setState({country: event.target.value})}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                      label="Use this address for payment details"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  component="button"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={() => this.signUp()}
                >
                sign up
                </Button>
                <div>
                  {this.state.error.message}
                </div>
                <div className={classes.label}>
                <p>Already a user?
                  <Link to={'./login'}> Sign In Instead</Link>
                </p>
                </div>
              </Fragment>
            </Paper>
            
          </main>
          
      </Fragment>
      // </div>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp);