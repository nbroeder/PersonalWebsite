import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {MineButton} from './MineButton';

var numMines = 10;
var boardHeight = 10;
var boardWidth = 10;
var numTiles = boardHeight * boardWidth;
var numMinesFound = 0;
var numTilesClicked = 0;
class mineTile  {
  constructor(index, mineStatus, adjacentMines){
    this.mine = mineStatus;
    this.index = index;
    this.adjacentMines = adjacentMines;
    this.clicked = false;
    this.flag = false;
  }
}

export const Minesweeper = () => {
  
  const [mineLocations, updateMineLocations] = useState(() => selectMineLocations(numMines))
  const [boardTiles, updateBoard] = useState(() => createBoard(boardWidth, boardHeight))
  const [flagsOn, updateFlag] = useState(false);
  const [gameOver, updateGameOver] = useState(false);


  function selectMineLocations(mineAmount) {
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

    updateMineLocations(selectMineLocations(numMines))
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
    if(flagsOn == false){
      var arr = []
      boardTiles.forEach(function(e){
        arr.push(e);
      });
      arr[Math.floor(i / boardWidth)][i % boardHeight].clicked = true;
      numTilesClicked++;
      updateBoard(arr);
      if(boardTiles[Math.floor(i / boardWidth)][i % boardHeight].adjacentMines == 0){
        arr = autoClear(i);
      }
    }else{
      var arr = []
      boardTiles.forEach(function(e){
        arr.push(e);
      });
      arr[Math.floor(i / boardWidth)][i % boardHeight].flag = !arr[Math.floor(i / boardWidth)][i % boardHeight].flag;
      updateBoard(arr);
    }

    if (checkEndCondition == true){
      updateGameOver(!gameOver);
    }
  };

  function checkEndCondition(){
    if(numTiles - numTilesClicked - numMines <= 0){
      console.log(numTiles - numTilesClicked - numMines <= 0)
      return true;
    }else{
      return false;
    }
  }

  function autoClear(i){
    var y = Math.floor(i / boardWidth);
    var x = i % boardHeight;

    var onLeftSide = false;
    var onRightSide = false;
    var onTopRow = false;
    var onBottomRow = false;

    if((i + 1) % boardWidth == 0){
      onRightSide = true;
    }else if(i % boardWidth == 0) {
      onLeftSide = true;
    }
    if(i < boardWidth){
      onTopRow = true;
    }else if(i >= (boardWidth * boardHeight) - boardWidth){
      onBottomRow = true;
    }

    if(onLeftSide == false){
      if(boardTiles[y][x - 1].mine == false && boardTiles[y][x - 1].clicked == false){
        testClick(i - 1);
      }
      if(onTopRow == false){
        if(boardTiles[y - 1][x - 1].mine == false && boardTiles[y - 1][x - 1].clicked == false){
          testClick(i - boardWidth - 1);
        }
      }
      if(onBottomRow == false){
        if(boardTiles[y + 1][x - 1].mine == false && boardTiles[y + 1][x - 1].clicked == false){
          testClick(i + boardWidth - 1);
        }
      }
      
    }

    if(onRightSide == false){
      if(boardTiles[y][x + 1].mine == false && boardTiles[y][x + 1].clicked == false){
        testClick(i + 1);
      }
      if(onTopRow == false){
        if(boardTiles[y - 1][x + 1].mine == false && boardTiles[y - 1][x + 1].clicked == false){
          testClick(i - boardWidth + 1);
        }
      }
      if(onBottomRow == false){
        if(boardTiles[y + 1][x + 1].mine == false && boardTiles[y + 1][x + 1].clicked == false){
          testClick(i + boardWidth + 1);
        }
      }
    }

    if(onTopRow == false){
      if(boardTiles[y - 1][x].mine == false && boardTiles[y - 1][x].clicked == false){
        testClick(i - boardWidth);
      }
    }

    if(onBottomRow == false){
      if(boardTiles[y + 1][x].mine == false && boardTiles[y + 1][x].clicked == false){
        testClick(i + boardWidth);
      }
    }

    
  }

  return (
    
    <div>
      <div>
        <label>{numMines - numMinesFound}</label>
        <Button variant='contained' onClick={() => updateBoard(createBoard(boardWidth, boardHeight))}>Start</Button>
        <Button onClick={() => updateFlag(!flagsOn)}>{flagsOn?"flags on":"flags off"}</Button>
      </div>
      
      <Grid container spacing = {0} columns={10} width={350} height = {350}>
        {Array.from(Array(100)).map((_, index) => (
        <Grid xs={1} key={index}>
          <MineButton  isClickedFunc = {testClick} tileSpecs = {boardTiles[Math.floor(index / boardHeight)][index % boardWidth]}></MineButton>
        </Grid>
        ))}
      </Grid>
      <label>{gameOver?"Game Over":"Keep going"}</label>
    </div>
    
  )
}
