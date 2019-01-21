import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'   
import classNames from 'classnames'
import { connect } from 'react-redux'
import { signOut } from '../../store/authAction'
import { compose } from 'redux'


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

const  SignedInLinks  = (props) => {
    const { classes } = props;

    return (
        <div className={classes.right}>
            <NavLink 
                to = '/becomeahost'
                style={{textDecoration: 'none'}}
                color="inherit"
                variant="h3"
                underline="none"
                className={classes.rightLink}
            >
              <MenuItem>
                BECOME A HOST
              </MenuItem>
            </NavLink>

            <NavLink to = "/help"
                style={{textDecoration: 'none'}}
                variant="h3"
                underline="none"
                className={classNames(classes.rightLink, classes.linkSecondary)}
                >
              <MenuItem>
                HELP
              </MenuItem>
            </NavLink>

            <a
                onClick={props.signOut}
                style={{textDecoration: 'none'}}
                color="inherit"
                variant="h3"
                underline="none"
                className={classes.rightLink}
            >
              <MenuItem>
                LOG OUT
              </MenuItem>
            </a>
        </div>
    ) 
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch (signOut())
    }
}

const enhanceSingedInLinks = compose(
    withStyles(styles),
    connect(null, mapDispatchToProps)
)

export default enhanceSingedInLinks(SignedInLinks);