import React, { useState } from 'react'

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

const GameBoard = ({ onSelectSquare, turns }) => {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard)

    // function handleCellClick(rowId, colId) {
    //     setGameBoard((prevBoard) => {
    //         const updatedBoard = [...prevBoard.map((innerArr) => [...innerArr])]
    //         updatedBoard[rowId][colId] = activePlayerSymbol;
    //         return updatedBoard;
    //     });
    //     onSelectSquare();
    // }
    let gameBoard = initialGameBoard;

    // Deriving state from props (turns)
    for(const turn of turns) {
        // object destructuring..
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowId) => <li key={rowId}>
                <ol>
                    {row.map((playerSymbol, colId) => 
                    <li key={colId}>
                        <button onClick={() => onSelectSquare(rowId, colId)}>{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    )
}

export default GameBoard