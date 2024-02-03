# Grokking Typescript Log

## Purpose 

To capture the steps I have taken in my attemps to learn the TypeScript
web development language, its tooling, the Node.js runtime and the npm
package management ecosystem.

## Logs:

### 2024-02-02:

Completed my first client-side JavaScript project called
[hw](https://grscheller.github.io/grok-typescript/index.html#hw).

I wanted to create a "Hello World" webpage using straight HTML,
JavaScript and TypeScript. With the
[ECMAScript® 2023 language specification](https://ecma-international.org/publications-and-standards/standards/ecma-262/)
it seems that JavaScript is morphing into TypeScript.

So the goal then became to write a straight HTML version, another using
embedded JavaScript, and one using external JavaScript.

Well, using embedded JavaScript worked beautifully, but building the
webpage leveraging external JS does not seem to be a good use
case. A better use of external JS is to either dynamic behaviors to the
webpage or launch an alert popup.

So, I will experiment with external JS on the next project.

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

### 2024-01-22:

Education resource for HTML, CCS, Javascript: 
[https://www.w3schools.com/](https://www.w3schools.com/)

I am not particularly impressed by the tutorials, but it has quizes that
I think will be useful to test my knowledge.

### 2024-01-23:

What does Wikipedia say?

The rest of this section is taken, more or less, from Wikipedia. I was
looking for a "language definition" for JavaScript and I will need to
invetigate the various ECMAScript standards for that. In the mean time,
I stumbled upon a treasure trove of factoids on Wikipedia. In this
section, I will paraphases heavily from Wikipedia.

JavaScript (JS) programmng language, along side HTML and CSS, is a core
technology of the World Wide Web. As of 2023, 98.7% of websites use
client side JavaScript to implement webpage behaviors, often
incorporating third-party libraries. All major web browsers have
dedicated JavaScript engines to execute the code on end user devices.

Today, JavaScript is a high-level programming language which 

* is dynamically typed
* is just-in-time compiled
* uses prototype-based object-orientation
* has first class functions
* supports functional, imperative and event-driven paradigms  
* has APIs for text, dates, regular expressions, data structures
* suports the Document Object Model [DOM](dom/dom-overview.md)

See [JS Syntax](https://en.wikipedia.org/wiki/JavaScript_syntax) for
non-trivial examples of JS syntax.

TypeScript (TS) is an open-source superset of JavaScript developed by
Microsoft. TS adds static typing via optional type annotations to JS. It
is designed for the development of large applications and compiles down
to JS. All JS programs are syntactically valid TypeScript, but they can
fail to type check.

TypeScript may be used to develop JavaScript applications for both
client-side and server-side execution. Either the default TypeScript
Compiler or the Babel compiler can be used to convert TS to JS.
TypeScript adds support for features such as classes, modules, and an
arrow function syntax as defined in the ECMAScript 2015 standard.

See [TypeScript](https://en.wikipedia.org/wiki/TypeScript) article on
Wikipedia for examples of type declarations and enumeration types.

