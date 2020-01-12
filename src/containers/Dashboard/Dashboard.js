import React, { Fragment } from 'react';

// Urql
import { Query } from 'urql';

// Material-Ui
import { makeStyles } from '@material-ui/core/styles';

// Components and Containers
import Options from '../Options/Options';
import Cards from '../Cards/Cards';

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
                <Options/>
                <Cards/>
            </div>
        </Fragment>
    )
}

export default Dashboard;