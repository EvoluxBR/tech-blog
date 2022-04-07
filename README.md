# Evolux blog

## Dev setup

Before you start coding, please run the following line:
`npx husky add .husky/pre-commit "npx lint-staged"`
This will help to enforce the code style during development, forcing the linter to always run before you commit something.

## Running locally

`npm run develop`
Then open your browser at `localhost:8000`

## Writting posts

To write a new post for the blog, simply create a new folder in the `blog` folder. The folder's name will be used in the URL (e.g: `/blog/folder-name`), and create a `index.mdx` file inside it. with the post's content.

The posts should be written in markdown. If you don't know what it is, you can check the [Markdown Guide](https://commonmark.org).

You can check this [test post](blog/test-post) see an example of a post with a hero image, pictures and code snippets.

After the changes are commited, the blog with the new post will be automatically deployed, and you should be able to check it after a couple minutes.

## Troubleshooting

If `npm install` throws an `unable to resolve dependency tree` because of react 17, try running `npm install --legacy-peer-deps` and it should work
