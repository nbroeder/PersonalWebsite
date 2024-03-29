import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {MineButton} from './MineButton';

import bombImg from './minesweeper/bombTile.png'
import clickedBombImg from './minesweeper/clickedBomb.png'
import clickedTileImg from './minesweeper/clickedTile.png'
import eightImg from './minesweeper/eightTile.png'
import fiveImg from './minesweeper/fiveTile.png'
import flagImg from './minesweeper/flagTile.png'
import fourImg from './minesweeper/fourTile.png'
import oneImg from './minesweeper/oneTile.png'
import sevenImg from './minesweeper/sevenTile.png'
import sixImg from './minesweeper/sixTile.png'
import threeImg from './minesweeper/threeTile.png'
import twoImg from './minesweeper/twoTile.png'
import unclickedImg from './minesweeper/unclickedTile.png'

var clickedImgs = [clickedTileImg, oneImg, twoImg, threeImg, fourImg, fiveImg, sixImg, sevenImg, eightImg];
var numMines = 10;
var boardHeight = 10;
var boardWidth = 10;
var numTiles = boardHeight * boardWidth;
var numMinesFound = 0;
var numTilesClicked = 0;
var interval;
class mineTile  {
  constructor(index, mineStatus, adjacentMines, image){
    this.mine = mineStatus;
    this.index = index;
    this.adjacentMines = adjacentMines;
    this.clicked = false;
    this.flag = false;
    this.image = image;
  }

  getAdjacentMines() {
    return this.adjacentMines;
  }

}

export const Minesweeper = () => {
  
  const [mineLocations, updateMineLocations] = useState(() => selectMineLocations(numMines))
  const [boardTiles, updateBoard] = useState(() => createBoard(boardWidth, boardHeight))
  const [flagsOn, updateFlag] = useState(false);
  const [gameOver, updateGameOver] = useState(true);
  const [minesLeft, updateMinesLeft] = useState(numMines)
  const [timer, updateTimer] = useState(0);


  function selectMineLocations(mineAmount) {
    var arr = [];
    while(arr.length < mineAmount){
      var r = Math.floor(Math.random() * 100);
      if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr
  }

  function calculateAdjacentMines(mineArray, index){
    var adjacentMines = 0;
    var onLeftSide = false;
    var onRightSide = false;
    var onTopRow = false;
    var onBottomRow = false;

    if((index + 1) % boardWidth === 0){
      onRightSide = true;
    }else if(index % boardWidth === 0) {
      onLeftSide = true;
    }
    if(index < boardWidth){
      onTopRow = true;
    }else if(index >= (boardWidth * boardHeight) - boardWidth){
      onBottomRow = true;
    }

    if(onTopRow === false){
      if(mineArray.includes(index - boardWidth)) 
          adjacentMines++;

      if(onLeftSide === false){
        if(mineArray.includes(index - boardWidth - 1)) 
          adjacentMines++;
      }

      if(onRightSide === false){
        if(mineArray.includes(index - boardWidth + 1)) 
          adjacentMines++;
      }
    }

    if(onBottomRow === false){
      if(mineArray.includes(index + boardWidth)) 
          adjacentMines++;

      if(onLeftSide === false){
        if(mineArray.includes(index + boardWidth - 1)) 
          adjacentMines++;
      }

      if(onRightSide === false){
        if(mineArray.includes(index + boardWidth + 1)) 
          adjacentMines++;
      }
    }
      
    if(onLeftSide === false){
      if(mineArray.includes(index - 1)) 
          adjacentMines++;
    }
    if(onRightSide === false){
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
        var mine = new mineTile(index, mineLocations.includes(index), calculateAdjacentMines(mineLocations, index), unclickedImg);
        tempRow[j] = mine;
        index++;
      }
      tempBoard[i] = tempRow;
    }
    return tempBoard

  }

  function startGame(boardWidth, boardHeight){
    if(timer != 0){
      clearInterval(interval);
    }
    updateTimer(0);
    interval = setInterval(() => timerTick(),1000);
    updateGameOver(false);
    numTilesClicked = 0;
    numMinesFound = 0;
    updateMinesLeft(numMines);
    return createBoard(boardWidth, boardHeight);
  }

  function timerTick(){
    updateTimer(timer => timer + 1);
  }

  const testClick = (i)=>{
    var y = Math.floor(i / boardWidth);
    var x = i % boardHeight;

    if(gameOver === false){
      if(flagsOn === false && boardTiles[y][x].flag === false && boardTiles[y][x].clicked === false){
        var arr = []
        boardTiles.forEach(function(e){
          arr.push(e);
        });
        arr[y][x].clicked = true;
        if(arr[y][x].mine === false)
          arr[y][x].image = clickedImgs[arr[y][x].getAdjacentMines()];
        else{
          arr[y][x].image = clickedBombImg;
          gameLost();
        }
          
  
        numTilesClicked++;
        updateBoard(arr);
        if(boardTiles[y][x].getAdjacentMines() === 0){
          arr = autoClear(i);
        }
      }else if (flagsOn === true && boardTiles[y][x].clicked === false){
        var arr = []
        boardTiles.forEach(function(e){
          arr.push(e);
        });
  
        if(arr[y][x].flag === true){
          arr[y][x].image = unclickedImg;
          numMinesFound--;
          updateMinesLeft(numMines - numMinesFound);
        }else{
          arr[y][x].image = flagImg;
          numMinesFound++;
          updateMinesLeft(numMines - numMinesFound);
        }
        arr[y][x].flag = !arr[y][x].flag;
        
        updateBoard(arr);
      }

      if (checkEndCondition() === true){
        stopGame();
      }
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

  function stopGame(){
    updateGameOver(!gameOver);
    clearInterval(interval);
  }

  function gameLost(){

    stopGame();
  }

  function autoClear(i){
    var y = Math.floor(i / boardWidth);
    var x = i % boardHeight;

    var onLeftSide = false;
    var onRightSide = false;
    var onTopRow = false;
    var onBottomRow = false;

    if((i + 1) % boardWidth === 0){
      onRightSide = true;
    }else if(i % boardWidth === 0) {
      onLeftSide = true;
    }
    if(i < boardWidth){
      onTopRow = true;
    }else if(i >= (boardWidth * boardHeight) - boardWidth){
      onBottomRow = true;
    }

    if(onLeftSide === false){
      if(boardTiles[y][x - 1].mine === false && boardTiles[y][x - 1].clicked === false){
        testClick(i - 1);
      }
      if(onTopRow === false){
        if(boardTiles[y - 1][x - 1].mine === false && boardTiles[y - 1][x - 1].clicked === false){
          testClick(i - boardWidth - 1);
        }
      }
      if(onBottomRow === false){
        if(boardTiles[y + 1][x - 1].mine === false && boardTiles[y + 1][x - 1].clicked === false){
          testClick(i + boardWidth - 1);
        }
      }
      
    }

    if(onRightSide === false){
      if(boardTiles[y][x + 1].mine === false && boardTiles[y][x + 1].clicked === false){
        testClick(i + 1);
      }
      if(onTopRow === false){
        if(boardTiles[y - 1][x + 1].mine === false && boardTiles[y - 1][x + 1].clicked === false){
          testClick(i - boardWidth + 1);
        }
      }
      if(onBottomRow === false){
        if(boardTiles[y + 1][x + 1].mine === false && boardTiles[y + 1][x + 1].clicked === false){
          testClick(i + boardWidth + 1);
        }
      }
    }

    if(onTopRow === false){
      if(boardTiles[y - 1][x].mine === false && boardTiles[y - 1][x].clicked === false){
        testClick(i - boardWidth);
      }
    }

    if(onBottomRow === false){
      if(boardTiles[y + 1][x].mine === false && boardTiles[y + 1][x].clicked === false){
        testClick(i + boardWidth);
      }
    }

    
  }

  return (
    
    <div>
      <div>
        
        <label>{"\t"}Mines Left: {"\t"}</label>
        <label className='minesweeper-font'>{"\t"} {minesLeft + "\t"}</label>
        <label>{"\t"}Time: {"\t"}</label>
        <label className='timer-font'>{timer + "\t"}</label>
        
        <Button onClick={() => updateFlag(!flagsOn)}>{flagsOn?"flags on":"flags off"}</Button>
      </div>
      
      <Grid container spacing = {0} columns={10} width={350} height = {350}>
        {Array.from(Array(100)).map((_, index) => (
        <Grid xs={1} key={index}>
          <MineButton  isClickedFunc = {testClick} tileSpecs = {boardTiles[Math.floor(index / boardHeight)][index % boardWidth]}></MineButton>
        </Grid>
        ))}
      </Grid>
      <Button variant='contained' onClick={() => updateBoard(startGame(boardWidth, boardHeight))}>Start</Button>
      <label>{gameOver === false?"":(numTiles - numTilesClicked - numMines) === 0?"You Win Great Job" : "Try Again"}</label>
    </div>
    
  )
}
