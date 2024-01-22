# Grokking Typescript Log

## Purpose 

To capture the steps I have taken in my attemps to learn the TypeScript
web development language, its tooling, the Node.js runtime and the npm
package management ecosystem.

## Logs:

### 2024-01-21:

Getting an npm account setup.

Well, the [npm](https://www.npmjs.com/) repo is maintained by GitHub.
Went there and created a free npm account:

```
  username: grscheller
  password: <random gibberish>
```

Setup Two-Factor authentication with Google Authenticator. Saved
recovery code in a safe place.

Linked npm account with my grscheller GitHub account.

Edited my npm profile. Gave my full name. Could not change my profile
picture. Uses some proprietary service called Gravatar, whose tagline
is "One profile for everything, everywhere." Well, that is not what
I want. No way to upload a One Piece related avatar image.

Probably will not touch npm for a while.

#### Links:

* npm website: [https://www.npmjs.com/](https://www.npmjs.com/)
* my landing page: [https://www.npmjs.com/~grscheller/](https://www.npmjs.com/~grscheller/)
* docs: [https://docs.npmjs.com/](https://docs.npmjs.com/)
* npm support: [https://www.npmjs.com/support/](https://www.npmjs.com/support/)

### 2024-01-21:

Created grscheller/grok-typescript Repo on GitHub.

This repo is the project. It will document my learning of TypeScript and
host my notes. It will contain mostly Markdown files, HTML files, and
standalone node files (whatever they are). The license used will be
`The Unlicence`.

Any npm packages I write in support of this effort will have their own
associated npm repos and will use the `Apache 2.0 License`. I may run
small HTML JavaScript/TypeScript examples from the repo's GitHub Pages.

### 2024-01-21:

Created my first two sets of notes:

* [npm CLI Interface](npm/npm-cli-interface.md)
* [Node.js .gitignore](node/node-dot-gitignore.md) 

### 2024-01-22:

The npm package manager is not the only game in town.

* [npm](https://docs.npmjs.com/): "node package manager"
* [Yarn](https://yarnpkg.com/): Yarn package manager
* [pnpm](https://pnpm.js.org/): performant npm

Seems npm is actually part of Node.js `https://nodejs.org/`. Also, npm
and Yarn have been one-uping each other for years with pnpm the new kid
on the block. See this [blog](https://refine.dev/blog/how-to-use-pnpm/)
for more info on pnpm.

Yarn, npm and pnpm are Open Source projects. Yarn is maintained by
Meta, Expo.dev & Google; npm is maintained by Microsoft; and pnpm is
seems to actually be a community driven. They do have about 14 corporate
sponsoes.
