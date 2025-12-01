
import React from 'react'



const Gameboared = ({onselectsquere,board}) => {


  return (

   <ol id='game-board'>
    {board.map((row,rowIndex)=>
         <li key={rowIndex}>
        <ol>
            {row.map((playersymbol,colIndex)=>
                 <li key={colIndex}><button  onClick={()=> onselectsquere(rowIndex,colIndex)}  disabled={playersymbol !==null}>{playersymbol}  </button>
                 </li> )}
        </ol>
    </li> )}
   </ol>
  )
}

export default Gameboared
