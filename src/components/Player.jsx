import React, { useState } from 'react'

const Player = ({initialName, symbol, isActive}) => {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)
    
    const handleEditClick = () => {
        setIsEditing((prev) => !prev)
    }   

    const handleNameChange = (e) => {
        setPlayerName(e.target.value)
    }

    let editPlayerName = <span className='player-name'>{playerName}</span>

    if (isEditing) {
        editPlayerName = <input type='text' value={playerName} onChange={handleNameChange}/>
    }
    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editPlayerName}
                {/* {isEditing ===false ? (<span className='player-name'>{name}</span>):(<input type='text' placeholder={name}/>)} */}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button type="button" onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}

export default Player