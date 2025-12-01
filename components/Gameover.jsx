import React from 'react'

const Gameover = ({winner,handlerestart}) => {
  return (
    <div id='game-over'>
     <h2>game-over</h2>
     {winner && <p>{winner} won </p>}
     {!winner && <p>it's  a dra'w</p>}
     <p><button onClick={handlerestart}>rematch</button></p>
      
    </div>
  )
}

export default Gameover
