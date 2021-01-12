// Module Start
// JS imports
import React, { useState, useEffect } from 'react';
import Chessboard from './Chessboard';
import { ChessType } from '../props';

// App
export default function App() {
  const [board, setBoard] = useState<ChessType>([]);
  const [pieces, setPieces] = useState<number>(1);
  const [active, setActive] = useState<boolean>(true);
  const [firstMove, setFirstMove] = useState<boolean>(true);

  /**
   * Board initialization
   * The board is represented by a matrix and initialized
   * in Y reverse order (starting from top/left - or 8/1), in which:
   * - 0: empty square
   * - 1: filled square
   */
  const initBoard: () => void = () => {
    const matrix: ChessType = [];

    // Ranks
    for (let i = 0; i < 8; i++) {
      matrix[i] = [];

      // Files
      for (let j = 0; j < 8; j++) {
        // Black pawn fixed position according to the provided FEN
        matrix[i][j] = i === 1 && j === 2 ? 1 : 0;
      }
    }

    setBoard(matrix);
  };
  /**
   * White pawn starting position setter
   * - Position the pawn in any legal random square
   * - Set the remaining squares as "illegal" (non-interactable)
   * (except for the white and black pawns)
   */
  const handleAdd: () => void = () => {
    // Generate a random position between files a-h
    const position: number = Math.floor(Math.random() * 8);

    // Update the board
    setBoard(
      board.map((rank, i) =>
        rank.map((file, j) =>
          i === 6
            ? // Put the pawn at the expected spot
              j === position
              ? (rank[j] = 1) // If the spot is free then lock it
              : file === 0
              ? (rank[j] = 'x') // X: locked square
              : file
            : // Lock the remaining free sqares
            // except the ones in the white pawn file
            // and its first possible moves
            j !== position || i < 4 || i === 7
            ? file === 0
              ? (rank[j] = 'x')
              : file
            : file,
        ),
      ),
    );
    // Update the pieces
    setPieces(2);
    // Update the controls
    setActive(false);
  };
  // Board reset
  const handleReset: () => void = () => {
    // Re-initialize the board
    initBoard();
    // Update the pieces
    setPieces(1);
    // Update the controls
    setActive(true);
    // Set the first move
    setFirstMove(true);
  };
  const handleMove: (newRank: number, newFile: number) => void = (
    newRank,
    newFile,
  ) => {
    const matrix: ChessType = [...board];

    // Capture check
    if (matrix[newRank][newFile] === 1) {
      // If the black pawn is being captured
      // then lock the previous possible white pawn positions/moves
      matrix[newRank][newFile - 1] = 'x';
      matrix[newRank + 1][newFile - 1] = 'x';
      matrix[newRank + 1][newFile + 1] = 'x';

      // Update the pieces
      setPieces(1);
    } else {
      // Update the new spot
      matrix[newRank][newFile] = 1;
    }

    // Lock the previous one
    matrix[newRank + 1][newFile] = 'x';

    /**
     * Move availability check
     * If legal unlock the next rank:
     * - The rank must exists
     * - The above square must be locked
     * */
    if (newRank - 1 >= 0 && matrix[newRank - 1][newFile] === 'x') {
      matrix[newRank - 1][newFile] = 0;
    }
    // First move check
    if (firstMove) {
      // Ensure to lock files 2-3 if moved of 2 spots
      matrix[newRank + 2][newFile] = 'x';

      setFirstMove(false);
    }

    // Update the board
    setBoard(matrix);
  };

  useEffect(() => {
    initBoard();
  }, []);

  return (
    <Chessboard
      board={board}
      pieces={pieces}
      add={handleAdd}
      reset={handleReset}
      active={active}
      move={handleMove}
    />
  );
}
