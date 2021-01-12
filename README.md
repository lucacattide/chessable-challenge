# Chessable Coding Challenge

## User Story

Using React:

- Display a chessboard with a default FEN of: ```8/2p5/8/8/8/8/8/8 w KQkq - 0 1```
- Include a button that adds a white pawn to a random legal position on the board.
- Allow that pawn to make legal moves across the board.
- Do not use any 3rd-party chess libraries.
- Return your code in an online executable sandbox, such as https://codesandbox.io/

## Development Notes

- Features:
  - Responsiveness
  - State management
- The layout is totally responsive on every resolution
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

![Branches](./coverage/badge-branches.svg "Coverage - Branches") ![Branches](./coverage/badge-functions.svg "Coverage - Functions") ![Branches](./coverage/badge-lines.svg "Coverage - Lines") ![Branches](./coverage/badge-statements.svg "Coverage - Statements")

## Deployment

The production version is deployed on [Vercel (see)](https://csb-ghuwi.lucacattide.vercel.app/).

### Deploy on Vercel

The easiest way to deploy your app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

You may alternatively use the following automated deploy button:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Flucacattide%2Fcsb-ghuwi)

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
