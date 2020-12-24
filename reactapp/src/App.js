import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Slider } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    width: 500,
    padding: '20px'
  },
  slider: {
    margin: '30px 0'
  }
});

export default function DiscreteSlider() {
  const [value, setValue] = useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get('https://localhost:5001/random')
      .then(function (response) {
        setValue(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography gutterBottom>
        Random value: {value}
      </Typography>
      <Slider
        className={classes.slider}
        value={value}
        onChange={handleSliderChange}
        step={1}
        min={1}
        max={100}
      />
    </div>
  );
}
