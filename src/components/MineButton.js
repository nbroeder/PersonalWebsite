import React from 'react';
import Button from '@mui/material/Button';

var mine = false;
var clicked ;
var isClickedFunc;
var index;


export const MineButton = (props) => {


  return (
    <Button variant="contained"  style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} onClick={() => props.isClickedFunc(props.index)}>{props.clicked === true?(props.mine?"Mine":"-"):""}</Button>
  )
}
