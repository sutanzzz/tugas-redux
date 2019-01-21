import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '../module/AppBar'
import Toolbar, { styles as toolbarStyles } from '../module/ToolBar'
import SignedInLinks from './signedInLinks'
import SignedOutLinks from './signedOutLinks'
import { compose }  from 'redux'
import { connect } from 'react-redux'


const styles = theme => ({
    title: {
      fontSize: 24,
    },
    placeholder: toolbarStyles(theme).root,
    toolbar: {
      justifyContent: 'space-between',
    },
    left: {
      flex: 0,
    },
    leftLinkActive: {
      color: theme.palette.common.white,
    },
});
  
  function AppAppBar(props) {
    const { classes, auth, profile } = props;
    console.log(auth);
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar className={classes.toolbar}>
            <div className={classes.left} />
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              className={classes.title}
              to = "/"
            >
              <img src = "https://www.spekless.com/wp-content/uploads/2018/03/Airbnb-Logo.png" alt= "logo" style={{ maxWidth: 150}} />
            </Link>
            { links }
          </Toolbar>
        </AppBar>
        <div className={classes.placeholder} />
      </div>
    );
  }
  
  AppAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  

  const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth
    }
  }

  export default compose(
      connect(mapStateToProps), 
      withStyles(styles))(AppAppBar)