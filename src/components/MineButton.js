import React from 'react';
import Button from '@mui/material/Button';

var tileSpecs;
var isClickedFunc;

export const MineButton = (props) => {
  return (
    //<Button variant="contained"  style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} onClick={() => props.isClickedFunc(props.tileSpecs.index)}><img src = {props.tileSpecs.image}/></Button>
    <img src = {props.tileSpecs.image} style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} onClick={() => props.isClickedFunc(props.tileSpecs.index)}/>
    )
}
