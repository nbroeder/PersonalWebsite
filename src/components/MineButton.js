import React from 'react';
import Button from '@mui/material/Button';

var tileSpecs;
var isClickedFunc;

export const MineButton = (props) => {
  return (
    <Button variant="contained"  style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} onClick={() => props.isClickedFunc(props.tileSpecs.index)}>{props.tileSpecs.clicked === true?(props.tileSpecs.mine?"Mine" : props.tileSpecs.adjacentMines):""}</Button>
  )
}
