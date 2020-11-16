import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const CyanCheckbox = withStyles({
  root: {
    color: '#adb5bd', 
    '&$checked': {
      color: '#66d9e8',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);



const CheckboxLabels = () => {
  const [state, setState] = useState();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const onClick =() => {
    console.log("온클릭됩니당")
  }

  return (
      <FormControlLabel
        control={<CyanCheckbox icon={<FavoriteBorder fontSize="small" />} 
        checkedIcon={<Favorite fontSize="small" />} name="checkedH" />}
        onClick={onClick}
      />
  );
}

export default CheckboxLabels;