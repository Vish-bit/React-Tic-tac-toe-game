import React, { useState } from "react";

const GameBoard = ({ onSelectSquare, boards }) => {
  return (
    <ol id="game-board">
      {boards.map((row, rowId) => (
        <li key={rowId}>
          <ol>
            {row.map((playerSymbol, colId) => (
              <li key={colId}>
                <button
                  onClick={() => onSelectSquare(rowId, colId)}
                  disabled={playerSymbol != null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
