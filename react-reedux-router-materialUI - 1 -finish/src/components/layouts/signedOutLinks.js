import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'   
import classNames from 'classnames'

const styles = theme => ({
    right: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
    },
    rightLink: {
        fontSize: 16,
        color: theme.palette.common.white,
        marginLeft: theme.spacing.unit * 0,
    },
      linkSecondary: {
        color: theme.palette.secondary.main,
    },
});

function SignedOutLinks(props) {
    const { classes } = props;

    return (
        <div className={classes.right}>
            <NavLink 
                to = '/signup'
                style={{textDecoration: 'none'}}
                color="inherit"
                variant="h3"
                underline="none"
                className={classes.rightLink}
            >
              <MenuItem>
                SIGNUP
              </MenuItem>
            </NavLink>
            <NavLink to = '/signin'
                style={{textDecoration: 'none'}}
                variant="h3"
                underline="none"
                className={classNames(classes.rightLink, classes.linkSecondary)}
                >
              <MenuItem>
                LOGIN
              </MenuItem>
            </NavLink>
        </div>
    ) 
}

export default withStyles(styles)(SignedOutLinks);