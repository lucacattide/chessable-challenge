// Module Start
// JS imports
import React, { FC } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { ChessType } from '../props';
import Pawn from './Pawn';
// SASS imports
import * as styles from '../styles/Chessboard.module.scss';

// Interfaces
interface ChessProps {
  board: ChessType;
  pieces: number;
  add: () => void;
  reset: () => void;
  active: boolean;
  move: (newRank: number, newFile: number) => void;
}

// Board
const Chessboard: FC<ChessProps> = (props) => {
  const { board, pieces, add, reset, active, move } = props;
  // Move handler
  const handleMove: (newRank: number, newFile: number) => void = (
    newRank,
    newFile,
  ) => {
    move(newRank, newFile);
  };

  return (
    /* Container Start */
    <section className={styles.container}>
      <h1 className={styles.container__title}>Chessable Challenge</h1>
      {/* Board Start */}
      <div className={styles.container__board}>
        {board.map((ranks, i) => (
          /* Rank Start */
          <div key={i} className={styles.board__ranks}>
            {ranks.map((square, j) => (
              /* Square Start */
              <div
                key={j}
                className={clsx(styles.ranks__square, {
                  [styles.square__rank]: j === 0,
                  [styles.square__file]: i === ranks.length - 1,
                  // Disable interactions if the move on the square is illegal
                  // or the game has not started yet
                  [styles.disabled]: square === 'x' ? true : false || active,
                  /**
                   * Enable interactions if:
                   * - The move on the square is legal
                   * and the game has started or
                   * -- The game has started and:
                   * --- The square is not locked and
                   * it is not on the last rank
                   * (this is constrained just for this test) and:
                   * ---- The squares in the next rank, in the correspondent
                   * next and previous file than the black pawn,
                   * are filled by a white one
                   * i.e. Black pawn on c7 and white pawn on b6 or d6
                   */
                  [styles.square__active]:
                    (!active && square === 0) ||
                    (!active &&
                      square !== 'x' &&
                      i > 0 &&
                      i < board.length - 1 &&
                      j > 0 &&
                      j < ranks.length - 1 &&
                      (board[i + 1][j - 1] === 1 || board[i + 1][j + 1] === 1))
                      ? true
                      : false,
                })}
                // Display board coordinates
                data-after={String.fromCharCode(j + 1 + 64).toLowerCase()}
                data-before={ranks.length - i}
                // Pass the pawn new coordinates
                onClick={() => handleMove(i, j)}
              >
                {/* Piece Start */}
                <div className={styles.square__piece}>
                  {/* Show a piece if the square is considered filled */}
                  {square === 1 && (
                    // Show the black pawn as fixed starting piece
                    // until is being captured
                    <Pawn
                      color={
                        i === 1 && j === 2 && pieces === 1 && active
                          ? 'black'
                          : i === 1 && j === 2 && pieces === 2
                          ? 'black'
                          : 'white'
                      }
                    />
                  )}
                </div>
                {/* Piece End */}
              </div>
              /* Square End */
            ))}
          </div>
          /* Rank End */
        ))}
      </div>
      {/* Board End */}
      {/* Controls Start */}
      <aside className={styles.container__controls}>
        <h2 className={styles.controls__title}>Controls</h2>
        {/* Add Start */}
        <button
          className={clsx(styles.controls__button, {
            [styles.button__disabled]: !active,
          })}
          onClick={add}
          disabled={!active}
        >
          Add
        </button>
        {/* Add End */}
        {/* Reset Start */}
        <button
          className={clsx(styles.controls__button, {
            [styles.button__disabled]: active,
          })}
          onClick={reset}
          disabled={active}
        >
          Reset
        </button>
        {/* Reset End */}
      </aside>
      {/* Controls End */}
    </section>
    /* Container End */
  );
};

// Properties Validation
Chessboard.propTypes = {
  board: PropTypes.array.isRequired,
  pieces: PropTypes.number.isRequired,
  add: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  move: PropTypes.func.isRequired,
};

// Module export
export default Chessboard;
// Module End
