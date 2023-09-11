import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {MineButton} from './MineButton';

var numMines = 10;
var boardHeight = 10;
var boardWidth = 10;
var numTiles = boardHeight * boardWidth;


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

  function getAdjacentMines(mineArray, index){
    var adjacentMines = 0;
    var onLeftSide = false;
    var onRightSide = false;
    var onTopRow = false;
    var onBottomRow = false;

    if((index + 1) % boardWidth == 0){
      onRightSide = true;
    }else if(index % boardWidth == 0) {
      onLeftSide = true;
    }
    if(index < boardWidth){
      onTopRow = true;
    }else if(index >= (boardWidth * boardHeight) - boardWidth){
      onBottomRow = true;
    }

    if(onTopRow == false){
      if(mineArray.includes(index - boardWidth)) 
          adjacentMines++;

      if(onLeftSide == false){
        if(mineArray.includes(index - boardWidth - 1)) 
          adjacentMines++;
      }

      if(onRightSide == false){
        if(mineArray.includes(index - boardWidth + 1)) 
          adjacentMines++;
      }
    }

    if(onBottomRow == false){
      if(mineArray.includes(index + boardWidth)) 
          adjacentMines++;

      if(onLeftSide == false){
        if(mineArray.includes(index + boardWidth - 1)) 
          adjacentMines++;
      }

      if(onRightSide == false){
        if(mineArray.includes(index + boardWidth + 1)) 
          adjacentMines++;
      }
    }
      
    if(onLeftSide == false){
      if(mineArray.includes(index - 1)) 
          adjacentMines++;
    }
    if(onRightSide == false){
      if(mineArray.includes(index + 1)) 
          adjacentMines++;
    }

    return adjacentMines;
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
          <MineButton  isClickedFunc = {testClick} index = {index} mine = {mineLocations.includes(index) === true? true : false} clicked = {btnClicked[index]  === 0 ? false : true} adjacentMines = {getAdjacentMines(mineLocations, index)}></MineButton>
        </Grid>
        ))}
      </Grid>
    </div>
    
  )
}
