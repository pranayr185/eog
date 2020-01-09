import React, { Fragment } from 'react';

// Urql
import { Query } from 'urql';

// Material-Ui
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    rootContainer: {
      margin: '10px'
    },
  });

const Dashboard = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <div className={classes.rootContainer}>
                Dashboard container
            </div>
        </Fragment>
    )
}

export default Dashboard;