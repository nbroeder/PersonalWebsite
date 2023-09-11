import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {MineButton} from './MineButton';

var numMines = 10;
var numTiles = 100;


export const Minesweeper = () => {
  
  const [mineLocations, updateMineLocations] = useState(() => selectMines(numMines))
  const [btnClicked, updateBtnClicked] = useState(() => setBtnsToUnclicked(numTiles))

  function selectMines(mineAmount) {
    var arr = [];
    while(arr.length < mineAmount){
      var r = Math.floor(Math.random() * 100);
      if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr
  }

  function setBtnsToUnclicked(numTiles){
    var arr = [];
    while(arr.length < numTiles){
      arr.push(0);
    }

    return arr
  }

  const testClick = (i)=>{
    
    var arr = []
    btnClicked.forEach(function(e){
      arr.push(e);
    });
    arr[i] = 1;
    updateBtnClicked(arr);
    console.log(btnClicked)
  };

  return (
    
    <div>
      <Button variant='contained' onClick={() => updateMineLocations(selectMines(numMines))}>Start</Button>
      <Grid container spacing = {0} columns={10} width={350} height = {350}>
        {Array.from(Array(100)).map((_, index) => (
        <Grid xs={1} key={index}>
          <MineButton  isClickedFunc = {testClick} index = {index} mine = {mineLocations.includes(index) === true? true : false} clicked = {btnClicked[index]  === 0 ? false : true} ></MineButton>
        </Grid>
        ))}
      </Grid>
    </div>
    
  )
}
