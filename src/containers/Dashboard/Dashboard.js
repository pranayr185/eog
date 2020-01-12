import React, { Fragment, useState } from 'react';

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

    const [state, setState] = useState({
        selectedOptions: []
      });

    const onOptionsSelect = (selectedOptions) => {
        setState({
            selectedOptions
        });
      };

      const { selectedOptions } = state;

      const cards = [];
      
      selectedOptions.map((option) => {
          const optionName = option;

          cards.push({
            id: optionName,
            name: optionName,
            stats: 120.3,
          });
          return null;
      })

    return (
        <Fragment>
            <div className={classes.rootContainer}>
                <Options onStateChange={onOptionsSelect}/>
                <Cards cardsData={cards}/>
            </div>
        </Fragment>
    )
}

export default Dashboard;