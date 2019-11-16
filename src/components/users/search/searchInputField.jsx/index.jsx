import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '30vw',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const SearchInputField = () => {
    const classes = useStyles();
    return (  
        <Paper className={classes.root}>
            <IconButton className={classes.iconButton} aria-label="menu">
                <FontAwesomeIcon color='#808080' icon={faSearch}/>  
            </IconButton>
            <InputBase
                className={classes.input}
                placeholder="Filter table content"
            />
        </Paper>
    );
}
 
export default SearchInputField;