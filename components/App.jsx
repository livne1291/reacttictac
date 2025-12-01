import React, { useState } from 'react'
import Players from './components/players'
import Gameboared from './components/Gameboared'
import Log from './components/Log'
import { WINNING_COMBINATIONS } from './components/Winning combination'
import Gameover from './components/Gameover'


const initialgameboard =  [
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

function deriveactiveplayer(gameturn){
  let currentplayer = 'x';

  if(gameturn.length > 0 && gameturn[0].player === 'x'){
    currentplayer = 'o'
  }

  return currentplayer
}





const App = () => {
  const [gameturn,setgameturn] = useState([])

  function handlereset(){
  setgameturn([])
  }

 const activeplayer = deriveactiveplayer(gameturn)

 let gameboard = [...initialgameboard.map(array=>[...array])];

 for(let turn of gameturn){
    const {square,player} = turn ;
    const {row,col} = square;

    gameboard[row][col] = player;
 }
let winner ;

for(  const combination of WINNING_COMBINATIONS){
  const firstsquare = gameboard[combination[0].row][combination[0].column]
  const secondsquare = gameboard[combination[1].row][combination[1].column]
  const thirdsquare = gameboard[combination[2].row][combination[2].column]

if(firstsquare &&   firstsquare === secondsquare  && firstsquare === thirdsquare){
winner = firstsquare
}
}

const hasdraw = gameturn.length === 9 && !winner;


  function handleselectsquere(rowIndex,colIndex){
    setgameturn(prevturn => {

     const currentplayer = deriveactiveplayer(prevturn)


      const updatedturn = [
        {square:{row:rowIndex,col:colIndex},player: activeplayer},...prevturn];

       

        return updatedturn
    })
    
  }
  return (
   <main>
    <div id="game-container">
      <ol id='players'  className='highlight-player'>
        <Players   initialname = 'player 1'  symbol = 'x' isactive={activeplayer === 'x'}  />
        <Players    initialname = 'player 2'   symbol = 'o'    isactive={activeplayer === 'o'}/>
      </ol>
      {(winner || hasdraw )&& <Gameover  winner={winner}  handlerestart={handlereset}/>}
      <Gameboared   onselectsquere={handleselectsquere} board = {gameboard} />
    </div>
    <Log  turns={gameturn}/>
    
   </main>
  )
}

export default App


