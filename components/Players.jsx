import React, { useState } from 'react'

const Players = ({initialname,symbol,isactive}) => {
    const [playername,setplayername] = useState()
    const [isediting,setisediting] = useState(false)

    function handlechange(e){
          setplayername(e.target.value)  
    }


    function handleeditclick(){
        setisediting((editing)=>!editing)
        }

        let editableplayername =   <span className='player-name' >player name</span>

        if(isediting){
            editableplayername = <input type="text" value={playername}  onChange={handlechange}/>
        }

       
    
  return (
    <li  className={isactive? 'active' : undefined}>
    <span className='player'>
    {editableplayername}

    <span className='player-symbol'>{symbol}</span>
    </span>
   <button onClick={handleeditclick}>{isediting?'save':'edit'}</button>
  </li>
  )
}

export default Players
