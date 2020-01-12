import React, {Fragment} from 'react';

// Material-Ui
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles({
    cardsContainer: {
      display: 'flex',
    },
    card: {
      'max-width': '200px',
      'flex-grow': 1,
      'margin-right': '10px',
      '&:last-child': {
        'margin-right': 0,
      },
    },
  });


const Cards = () => {
    const classes = useStyles();

    const cardsData = [ 
        {
            id: 1,
            name: 'waterTemp',
            stats: 165.24
        },
        {
            id: 2,
            name: 'injValveOpen',
            stats: 27.24
        },
        {
            id: 3,
            name: 'oilTemp',
            stats: 250.24
        },
        {
            id: 4,
            name: 'casingPressure',
            stats: 261.24
        },
        {
            id: 5,
            name: 'tubingPressure',
            stats: 1123.24
        },
        {
            id: 6,
            name: 'flareTemp',
            stats: 161.24
        },
     ];

    return (
        <Fragment>
            <div className={classes.cardsContainer}>
                {
                    cardsData.map(card => {
                        const { id, name, stats } = card;
                        return (
                            <Card key={id} className={classes.card}>
                                <CardContent>
                                    <Typography variant="body2" component="h2">
                                        {name}
                                    </Typography>
                                    <Typography variant="h5" component="p">
                                        {stats}
                                    </Typography>
                                </CardContent>
                            </Card>    
                        );
                    })
                }
            </div>
        </Fragment>
    )
}

export default Cards;