# Evolux blog

## Dev setup

Before you start coding, please run the following line:
`npx husky add .husky/pre-commit "npx lint-staged"`
This will help to enforce the code style during development, forcing the linter to always run before you commit something.

## Running locally

`npm run develop`
Then open your browser at `localhost:8000`

## Troubleshooting

If `npm install` throws an `unable to resolve dependency tree` because of react 17, try running `npm install --legacy-peer-deps` and it should work
