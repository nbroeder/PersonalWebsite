import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {MineButton} from './MineButton';

var numMines = 10;
var boardHeight = 10;
var boardWidth = 10;
var numTiles = boardHeight * boardWidth;

class mineTile  {
  constructor(index, mineStatus, adjacentMines){
    this.mine = mineStatus;
    this.index = index;
    this.adjacentMines = adjacentMines;
    this.clicked = false;
  }
}

export const Minesweeper = () => {
  
  const [mineLocations, updateMineLocations] = useState(() => selectMines(numMines))
  const [boardTiles, updateBoard] = useState(() => createBoard(boardWidth, boardHeight))

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

  function createBoard(boardWidth, boardHeight){
    var tempBoard = [];
    var index = 0;

    updateMineLocations(selectMines(numMines))
    for (var i = 0; i < boardHeight; i++){
      var tempRow = [];
      for (var j = 0; j < boardWidth; j++){
        var mine = new mineTile(index, mineLocations.includes(index), getAdjacentMines(mineLocations, index));
        tempRow[j] = mine;
        index++;
      }
      tempBoard[i] = tempRow;
    }
    return tempBoard

  }

  const testClick = (i)=>{
    var arr = []
    boardTiles.forEach(function(e){
      arr.push(e);
    });
    arr[Math.floor(i / boardWidth)][i % boardHeight].clicked = true;
    updateBoard(arr);
  };

  return (
    
    <div>
      <Button variant='contained' onClick={() => updateBoard(createBoard(boardWidth, boardHeight))}>Start</Button>
      <Grid container spacing = {0} columns={10} width={350} height = {350}>
        {Array.from(Array(100)).map((_, index) => (
        <Grid xs={1} key={index}>
          <MineButton  isClickedFunc = {testClick} tileSpecs = {boardTiles[Math.floor(index / boardWidth)][index % boardHeight]}></MineButton>
        </Grid>
        ))}
      </Grid>
    </div>
    
  )
}
