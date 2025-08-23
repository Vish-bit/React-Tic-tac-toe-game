import React, { useState } from 'react'

const Player = ({initialName, symbol, isActive, onChangeName}) => {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)
    
    const handleEditClick = () => {
        setIsEditing((prev) => !prev);

        if (isEditing) {
            onChangeName(symbol, playerName);
        }
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
                <span className="player-symbol">{symbol}</span>
            </span>
            <button type="button" onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}

export default Player