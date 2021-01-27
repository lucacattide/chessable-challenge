# Chessable Coding Challenge

## User Story

Using React:

- Display a chessboard with a default FEN of: `8/2p5/8/8/8/8/8/8 w KQkq - 0 1`
- Include a button that adds a white pawn to a random legal position on the board.
- Allow that pawn to make legal moves across the board.
- Do not use any 3rd-party chess libraries.
- Return your code in an online executable sandbox, such as https://codesandbox.io/

## Development Notes

- Features:
  - Responsiveness
  - State management
  - Testing
- The layout is totally responsive on every resolution. The fluid structure is 100% pure CSS implemented and the visual assets are defined in pure SVG. This to ensure high perfomances with reduced load on a large number of systems.
- The chessboard is represented in the concept of a matrix, in which each value is intended as follows:

  - 0: represents an empty square (no pieces onto it)
  - 1: filled square (occupied by a piece)
  - x: a "blocked" square - no legal moves are allowed here

  ```
    i.e.

       a b c d e f g h
      -----------------
    8 |x|0|0|x|x|x|x|x|
    7 |x|0|1|x|x|x|x|x| <- Black pawn in c7
    6 |x|1|x|x|x|x|x|x| <- White pawn in b6
    5 |x|0|x|x|x|x|x|x|    // The state reflects a real case
    4 |x|0|x|x|x|x|x|x|    // according to the rules.
    3 |x|0|x|x|x|x|x|x|    // The white can catch the black
    2 |x|0|x|x|x|x|x|x|    // and continue along file c
    1 |x|x|x|x|x|x|x|x|    // or move forward
      -----------------
  ```

  During each move, each rank/file is automatically updated in order to reflect the current chessboard state, by filling/emptying each square - or even blocking it, basing on the involved pieces possibilities

- On every move a visual helper being displayed to show the user the possible next ones
- A reset button has been implemented in order to restart the game and avoiding annoying manual page refreshes
- Some of the implementation choices are related to this specific game, even if a good level of abstraction has been ensured

More details are indicated inside the code comments - where needed.
For any further in-depth consideration, please contact me on info@lucacattide.dev or feel free to open an issue.

## Getting Started

This is a [React](https://reactjs.org/) project bootstrapped with [CodeSandbox](https://codesandbox.io).

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

To run the tests:

```
npm run test
```

To run the tests with code coverage report:

```
jest --coverage
```

### Code Coverage

![Branches](./coverage/badge-branches.svg 'Coverage - Branches') ![Branches](./coverage/badge-functions.svg 'Coverage - Functions') ![Branches](./coverage/badge-lines.svg 'Coverage - Lines') ![Branches](./coverage/badge-statements.svg 'Coverage - Statements')
