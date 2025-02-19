# Grokking TypeScript Notes

Chronological notes on my journey to learn the TypeScript (TS)
ecosystem.

## Notes

I don't intend to retroactively edit these notes useless they are either
misleadingly confusing or factually inaccurate. Linked notes are subject
to change at any time.

### Pinned links

#### ECMA standard documentation

The current official
[ECMAScript ECMA-262](https://262.ecma-international.org/14.0/)
standard is the 14th edition from June 2023.

#### Node.js

Node.js is an open-source, cross-platform JavaScript runtime
environment. The name also refers to the non-profit organization
which develops the runtime.

* [Node.js website](https://nodejs.org)
* [Node.js on GitHub](https://github.com/nodejs)
* [GitHub repo](https://github.com/nodejs/node)
* [about Node.js](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
* [notes on Node.js .gitignore file](notes/node/node-dot-gitignore.md)

#### Node Package Manager (npm)

The term [npm](https://www.npmjs.com/about) can mean many things.

* [npm website](https://www.npmjs.com/)
* [npm support](https://www.npmjs.com/support/)
* [npm docs](https://docs.npmjs.com/)
* [grscheller npm landing page](https://www.npmjs.com/~grscheller/)
* [notes on npm CLI interface](notes/npm/npm-cli-interface.md)

Looks like npm the registry is a Micro$oft loss leader.

#### Other Node.js package managers

The npm package manager is part of `Node.js`. It is not the only
package manager available for Node.js.

* [Yarn](https://yarnpkg.com/): yarn package manager
* [pnpm](https://pnpm.js.org/): performant npm

#### Node.js vs npm

After several hours of web searching, I think this probably correct,

* Node.js maintained by the non-profit OpenJS Foundation
  * Node.js is a JavaScript framework
  * Node.js source code can be found [here](https://github.com/nodejs/node) 
* npm (the cmdline utility) is an open source package manager for Node.js
  * npm is a package manager for the Node.js framework
  * source code, maintained by GitHub, can be found [here](https://github.com/npm/cli)
* npm (the company) was bought by and absorbed into GitHub in 2020
  * GitHub was bought by Microsoft in 2018
* npm (the registry) is a service "to the community" provided by GitHub
  * this service is branded npm

#### Document Object Model (DOM)

* [notes on DOM](notes/dom/dom-overview.md)

#### Educational Resources

##### W3Schools

Education resource for HTML, CCS, JS:
[https://www.w3schools.com/](https://www.w3schools.com/)

I am not particularly impressed by these tutorials, but there are quizes
that I think will be useful to test my knowledge.

---

### 2024-01-21:

#### What does Wikipedia say?

The rest of this section is taken, more or less, from Wikipedia. I was
looking for a "language definition" for JavaScript and I will need to
investigate the various ECMAScript standards for that. In the mean time,
I stumbled upon a treasure trove of factoids on Wikipedia. In this
section, I will paraphrases heavily from Wikipedia.

JavaScript (JS) programming language, along side HTML and CSS, is a core
technology of the World Wide Web. As of 2023, 98.7% of websites use
client side JavaScript to implement webpage behaviors, often
incorporating third-party libraries. All major web browsers have
dedicated JavaScript engines to execute the code on end-user devices.

Today, JavaScript is a high-level programming language which

* is dynamically typed
* is just-in-time compiled
* uses prototype-based object-orientation
* has first class functions
* supports functional, imperative and event-driven paradigms
* has APIs for text, dates, regular expressions, data structures
* supports the Document Object Model [DOM](notes/dom/dom-overview.md)

See [JS Syntax](https://en.wikipedia.org/wiki/JavaScript_syntax) for
non-trivial examples of JS syntax.

TypeScript (TS) is an open-source super set of JavaScript developed by
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

#### Created the grscheller/grok-typescript GitHub Repo

This will document my learning of TypeScript and host my notes. It will
contain mostly Markdown files, HTML files, and standalone node files
(whatever they are). The license used will be `The Unlicence`.

Any npm packages I write in support of this effort will have their own
associated npm repos and will use the `Apache 2.0 License`. I may run
small HTML JavaScript/TypeScript examples from the repo's GitHub Pages.

#### Created my first two sets of notes:

* [npm CLI Interface](notes/npm/npm-cli-interface.md)
* [Node.js .gitignore](notes/node/node-dot-gitignore.md)

#### Getting an npm account setup

Well, the
[npm](https://www.npmjs.com/)
repo is maintained by GitHub. It directed me to
[npm](https://www.npmjs.com/)
Went there and created a free npm account:
`username: grscheller password: <random gibberish>`

Setup Two-Factor authentication with Google Authenticator. Saved
recovery code in a safe place.

Linked npm account with my grscheller GitHub account.

Edited my npm profile. Gave my full name. Could not change my profile
picture. Uses some proprietary service called Gravatar, whose tagline is
"One profile for everything, everywhere." Well, that is not what I want.
No way to upload a different One Piece related avatar image.

Probably will not touch npm for a while.

---

### 2024-01-22:

#### The npm package manager is not the only game in town.

* [npm](https://docs.npmjs.com/): "node package manager"
* [Yarn](https://yarnpkg.com/): Yarn package manager
* [pnpm](https://pnpm.js.org/): performant npm

Seems npm is actually part of Node.js `https://nodejs.org/`. Also, npm
and Yarn have been one-uping each other for years with pnpm the new kid
on the block. See this
[blog](https://refine.dev/blog/how-to-use-pnpm/)
for more info on pnpm.

Yarn, npm and pnpm are Open Source projects. Yarn is maintained by
Meta, Expo.dev & Google; npm is maintained by Microsoft; and pnpm is
seems to actually be a community driven. They do have about 14 corporate
sponsors.

---

### 2024-02-02:

#### Completed my first JS project

My first client-side JavaScript project is called
[hw](https://grscheller.github.io/grok-typescript/index.html#hw).

I wanted to create a "Hello World" webpage using straight HTML,
JavaScript and TypeScript. With the
[ECMAScript® 2023 language specification](https://ecma-international.org/publications-and-standards/standards/ecma-262/)
it seems that JavaScript is morphing into TypeScript. According to the
14th edition of the
[offical ECMA-262 standard](https://262.ecma-international.org/14.0/),
the standard defines the ECMAScript 2023 general-purpose programming
language.

So the goal then became to write a straight HTML version, another using
embedded JavaScript, and one using external JavaScript.

Well, using embedded JavaScript worked beautifully, but building the
webpage leveraging external JS does not seem to be a good use case.
A better use of external JS is either to give dynamic behaviors to the
webpage or to launch an alert popup or external app.

So, I will experiment with external JS on the next project.

---

### 2024-02-03:

#### Started next TS project

Starting my next client side TypeScript subproject. Since the ECMAScript
standard defining ECMAScript as a "general-purpose programming
language," I will use the terms TypeScript and TS to denote ECMAScript
driven technologies. I've already named this effort "Grokking
TypeScript" and the developers I work with tend to use the term
TypeScript when they are not using the term "React."

The next project will involve creating a dynamic date related webpage.

---

### 2024-02-07:

#### Reflections

What I have been doing is usng a combination of embedded & extenal JS to
create structure and give dynamic behaviors to HTML webpages. I got
a simple JS button webapps that display "Hello World!" in `<p>...</p>`
blocks. The JS I write interacts with something internal to web browsers
called the DOM. If I replace the `.js` extension with `.ts` the TS LSP
server starts giving me very useful information. Seems TS tooking looks
for a `tsconfig.json` file in the "project" root directory. There also
are `jsconfig.json` files too. There is a CLI tool called `tsc` for
TypeScript compiler. With the right external tooling, you can embed TS
in HTML documents. Lots of posts from 10 years ago state why would
anyone want to take the "performance hit" of embedding TS when you can
transpile (source-to-source) TS to JS. Now it seems that ES standard is
morphing JS into TS.

Things to do going forward:

* figure out why my docs/dates project is failing
* ensure JS and TS CLI tooling is properly installed and configured
* ensure Neovim LSP is properly configured for both JS & TS
* understand what this DOM thing is and how browsers implement it
* understand the ECMAScript language syntax and paradigms
* investigate other TS backends
* learn TS Functional Programming

Since functions are first class objects in TS, FP seems very natural
with it. In C++ objects are structs. In Java functions are objects with
call methods. In Python everything is an object including classes. In TS
classes are functions and what the `new` keyword does is not quite what
one would naively expect. Maybe some sort of "prototyping" mechanism?

___

### 2024-02-08:

#### Fixed my dates project working

Got the
[Now webpage](https://grscheller.github.io/grok-typescript/date/now.html)
working from my
[docs/dates](https://github.com/grscheller/grok-typescript/tree/main/docs/date)
project.

My coworker Pavin suggested passing an array of webpage elements to
a callback function instead of the individual elements themselves. Not
sure why this would make any difference. I need to investigate.

---

### 2024-02-09:

#### Tools available on Arch

On Arch Linux let's see what tooling is available,

```
    $ pacman -Ss 'typescript'
      extra/deno 1.40.3-1
          A secure runtime for JavaScript and TypeScript
      extra/texlive-context 2023.66594-20 (texlive)
          TeX Live - ConTeXt and packages
      extra/ts-node 10.9.2-1
          TypeScript execution and REPL for node.js, with source map support
      extra/typescript 5.3.3-1
          JavaScript with syntax for types
      extra/typescript-language-server 4.3.2-1
          Language Server Protocol (LSP) implementation for TypeScript using tsserver
      extra/typescript-svelte-plugin 0.3.37-1
          TypeScript plugin for Svelte intellisense
```

Installing some tooling,

```
    $ sudo pacman -Syu typescript ts-node typescript-language-server deno
    ...
    Package (4)                       New Version  Net Change  Download Size
    
    extra/deno                        1.40.3-1      87.51 MiB      28.69 MiB
    extra/ts-node                     10.9.2-1       5.76 MiB       0.64 MiB
    extra/typescript                  5.3.3-1       30.53 MiB       2.33 MiB
    extra/typescript-language-server  4.3.2-1        2.12 MiB       0.37 MiB
```

---

### 2024-03-19: 

Decided to modeling these notes after my
[grscheller/grok-lua](https://github.com/grscheller/grok-lua)
repo.

---

### 2025-02-19:

Saw an example of TS code that looked really functional. Got me inspired
again.

The current official
[ECMAScript ECMA-262](https://262.ecma-international.org/15.0/)
standard is now the 15th edition from June 2024.

Instead of Arch Linux, I have moved to the Alpha version of Pop!OS.

The current version of npm installed on Pop!OS is 9.2.0. The latest
LTS version is 22.14.0 and latest development version is 23.8.0.

