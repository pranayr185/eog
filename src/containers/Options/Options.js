import React, {Fragment} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 720,
      maxWidth: 300,
    },
  }));

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const options = [
        'waterTemp',
        'casingPressure',
        'injValveOpen',
        'flareTemp',
        'oilTemp',
        'tubingPressure',
      ];

      const Options = (props) => {
        const classes = useStyles();
        const theme = useTheme();
        const [optionName, setOptionName] = React.useState([]);
      
        const handleChange = event => {
            setOptionName(event.target.value);
        };

    return (
        <Fragment>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-checkbox-label">Select...</InputLabel>
                <Select
                labelId="demo-mutiple-checkbox-label"
                id="demo-mutiple-checkbox"
                multiple
                value={optionName}
                onChange={handleChange}
                input={<Input />}
                renderValue={selected => selected.join(', ')}
                MenuProps={MenuProps}
                >
                {options.map(option => (
                    <MenuItem key={option} value={option}>
                    <Checkbox checked={optionName.indexOf(option) > -1} />
                    <ListItemText primary={option} />
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
        </Fragment>
    )
}

export default Options;