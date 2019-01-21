import React, { Component, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/authAction' 
import compose  from 'recompose/compose'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { CssBaseline, Paper, Button, Typography, Grid, TextField, FormControlLabel, Checkbox } from '@material-ui/core'

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'flex',
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
  state = {
      firstname:'',
      lastname:'',
      email:'',
      password: '',
      city:'',
      zip:'',
      coutry:'',
  }
  handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state) 
  }

  render() {
    const { classes, authError, auth } = this.props;
    if(auth.uid) return  <Redirect to='/' />

    return (
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
                <form onSubmit={this.handleSubmit}>
                    <Grid container spacing={24}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          id="firstName"
                          name="firstName"
                          label="First name"
                          fullWidth
                          autoComplete="fname"
                          onChange={this.handleChange}
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
                          onChange={this.handleChange}
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
                          onChange={this.handleChange}
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
                          onChange={this.handleChange}
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
                          onChange={this.handleChange}
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
                          onChange={this.handleChange}
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
                          onChange={this.handleChange}
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
                    >
                    sign up
                    </Button>
                  <div>
                { authError ? <p>{authError}</p> : null }
                </div>
              </form>
                <div className={classes.label}>
                <p>Already a user?
                  <Link to={'./signin'}> Sign In Instead</Link>
                </p>
                </div>
              </Fragment>
            </Paper>  
          </main> 
      </Fragment>
    );
  }
}

const  mapStateToProps = (state) => {
  return {
      auth: state.firebase.auth,
      authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      signUp: (newUser) => dispatch(signUp(newUser))
  }
}

const enhanceSignIn = compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
  
) 

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default enhanceSignIn(SignUp);