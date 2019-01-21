import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { NavLink } from 'react-router-dom'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 25,
    padding: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
},
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h4" component="h1">
          Help
        </Typography>
        <p/>
        <Typography component="p">
          if you want to log in this website please click button bellow
        </Typography>
        <p/>
        <Button style= {{background: "#6666ff"}} variant="contained"><NavLink to='/login'>log in</NavLink>
        </Button>
        <p/>
        <Typography component="p">
          if you don't have any account, please Sign Up first before you dive this website, click button below
        </Typography>
        <p/>
        <Button style= {{background: "#6666ff"}} variant="contained"><NavLink to='/login'>sign up</NavLink>
        </Button>
      </Paper>
    </div>
    
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);