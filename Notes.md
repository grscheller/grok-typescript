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

What I have been doing is using a combination of embedded & extenal JS
to create structure and give dynamic behaviors to HTML webpages. I got
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

#### Fixed dates project

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

```fish
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

---

### 2025-02-20:

* getting a feel for what I previously wrote
* added a new-line at end of last line in all files
  * old POSIX compliant requirement no one follows anymore
  * HTML/JavaScript so lenient that most websites are crap
  * HTML was originally intended for "dumb" end-users
    * Mozilla and Micro$oft browsers just ignores errors
    * Google browsers followed in this tradition
* goal for today is to set up node.js environment

---

### 2025-02-20:

#### Setting up Node.js

There is a POSIX shell based package manager called `nvm`. Install
script too heavy handed with my shell dotfiles. There is a 3rd party
`fish` version out in the wild. I think these are overkill.

The default npm that comes with Pop!OS is way too old.

```fish
    $ node --version
    v18.19.1
    $ npm --version
    9.2.0
```

From the [Node.js Download](https://nodejs.org/en/download) I down
loaded the latest LTS version: v22.14.0 and unpacked the tarball here:
`~/devel/node_lts`. After unpacking

```fish
    $ cd ~/devel/node_lts

    $ ls
    node-v22.14.0-linux-x64  node-v22.14.0-linux-x64.tar.xz

    $ ls node-v22.14.0-linux-x64/
    bin  CHANGELOG.md  include  lib  LICENSE  README.md  share

    $ ls node-v22.14.0-linux-x64/bin
    corepack  node  npm  npx

    $ ls -l node-v22.14.0-linux-x64/bin/
    total 117364
    lrwxrwxrwx 1 grs grs        45 Feb 10 17:08 corepack -> ../lib/node_modules/corepack/dist/corepack.js
    -rwxr-xr-x 1 grs grs 120177224 Feb 10 17:08 node
    lrwxrwxrwx 1 grs grs        38 Feb 10 17:08 npm -> ../lib/node_modules/npm/bin/npm-cli.js
    lrwxrwxrwx 1 grs grs        38 Feb 10 17:08 npx -> ../lib/node_modules/npm/bin/npx-cli.js

    $ file npm corepack npx node
    npm:      symbolic link to ../lib/node_modules/npm/bin/npm-cli.js
    corepack: symbolic link to ../lib/node_modules/corepack/dist/corepack.js
    npx:      symbolic link to ../lib/node_modules/npm/bin/npx-cli.js
    node:     ELF 64-bit LSB executable, x86-64, version 1 (GNU/Linux),
              dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2,
              BuildID[sha1]=ea9b4310844c696f0a090a9ee624f49bd3d7ab52,
              for GNU/Linux 3.2.0, with debug_info, not stripped, too many
              notes (256)
```

What the hell are `corepack` and `npx`?

* `corepack` is an opt-in experimental Node.js script
  * bridges Node.js projects and the package manager
  * lets you use Yarn, npm, and pnpm without (you) having to install them
* `npx` allows Node.js packages to be run without installing them globally
  * `npm` is a package manager for installing and managing dependencies

I'll ignore `corepack` and `npx` for now. I'd rather control my
environment.

Next I updated my fish environment to find the LTS stable environment
before the system node infrastructure.

---

### 2025-02-21:

#### Kiddie scripting Node.js applications

From the [HTML Dog](https://www.htmldog.com/guides/javascript/advanced/node/)
website, I copied/pasted into `./bin/hw_server1.js` the following
script:

```javascript
    var http = require('http');

    var server = http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World\n');
    })

    server.listen(16666, '127.0.0.1');

    console.log('Server running at http://127.0.0.1:16666/');
```

Where I changed the port number in the example from 1337 to 16666

Running the command

```fish
    $ node bin/hw_server1.jsvx
    Server running at http://127.0.0.1:16666
    ^C
```

displayed the text `Hello World` in both the Brave and Firefox browsers.
Also, `http://localhost:16666` worked.

Note that changing the port to 6666 resulted in Firefox displaying

```
    This address is restricted

    This address uses a network port which is normally used for purposes
    other than Web browsing. Firefox has canceled the request for your
    protection.
```

Brave displayed

```
    This site can’t be reached

    The webpage at http://127.0.0.1:6666/ might be temporarily down or it
    may have moved permanently to a new web address.

    ERR_UNSAFE_PORT
```

Next created `./bin/hw_server2.js` where I replaced `127.0.0.1` with the
IP address of my `godel2` workstation. This one displays "Hello World!!!"
to distinguish it from the other.

It worked and is distinct from `localhost`.

---

### 2025-02-23:

#### Continue kiddie scripting Node.js applications

Changed `hw_server1.js` and `hw_server2.js` to use port 8007.

From: `https://www.portnumbers.info/`

Port number 8007 is often associated with custom application development
and is frequently utilized for various web services and APIs. Unlike
standard ports that may have well-defined uses, such as HTTP on port 80
or HTTPS on port 443, port 8007 provides developers with an open
platform to test and deploy their applications without the risk of
conflict with widely used services.

Factoids:

* Pop!OS is uses an IP6 address for `localhost`
* `localhost` on Pop!OS is `::1` and not `127.0.0.1`
* web browser access IP6 addresses surrounding the address with `[]`
  * On Pop!OS `http://[::1]:8007/` same as `http://localhost:8007/`

---

### 2025-02-23:

#### Commandline processing

Creating two new JavaScript programs to list out the commandline past to
the program. Will develop them in parallel.

* parseArgs.js
* parseYargs.js

The first will not use any external dependencies. The second will
install a package named yargs

##### First let's install yargs

```
$ cd ~/devel/grok/grok-typescript/bin/
$ npm install yargs

added 16 packages in 1s
```

Hummm... 16 external packages needed for just a commandline parser?!
Seems a bit excessive. Maybe at some point I will write a standalone
package for commandline parsing. If I do, it will be in its own GitHub
repo before publishing on npm.

Let's find where these were put.

```
$ cd ~/.config
$ fd yargs

$ cd ~/.local
$ fd yargs
state/nvim/undo/%home%grs%devel%grok%grok-typescript%bin%parseYargs.js

$ cd ~/devel/node_lts/node-v22.14.0-linux-x64/
$ fd yarg

$ cd ~/devel/grok/grok-typescript/
$ ls
bin  docs  LICENSE  notes  Notes.md  README.md
$ fd yarg
bin/node_modules/yargs/
bin/node_modules/yargs/build/lib/typings/yargs-parser-types.js
bin/node_modules/yargs/build/lib/yargs-factory.js
```

Was not expecting such "localized" behavior from npm. From the commands
`npm help npm` and `npm help folders` I get these factoids:

* npm is the package manager for the Node JavaScript platform
  * it puts modules in place so that node can find them
  * it manages dependency conflicts intelligently
* npm comes pre-configured to use the npm public registry by default
  * `https://registry.npmjs.org`
* installation directories
  * local install (default): install in `./node_modules` of the current package root
    * install it locally if you're going to require() it
  * global install (with -g): install in /usr/local or wherever node is installed
    * install it globally if you're going to run it on the command line
  * if you need to install both globally & locally, either
    * install it in both places, or use npm link
 * whenever I am to publish something
   * start by reading `npm help publish`

Two files were created, `package.json` and  `package-lock.json`

The first json file, `package.json` contains

```
    {
      "dependencies": {
        "yargs": "^17.7.2"
      }
    }
```

The second json file, `package-lock.json` contains the same plus all of
the `yargs` dependencies. Seems that multiple versions of the same
dependency can be installed.

##### Restructuring project

Just throwing my executables into a `bin/` directory is not going to cut
it.

* renaming `bin/` -> `projects/`
* moving `hw_server1.js` and `hw_server2.js` -> `projects/hw`
* moving `parseArgs.js` and `parseYargs.js` -> `projects/args`

Will need to eventually create README.md files for each project. Will
commit `package.json` and `package-lock.json` in GIT but have README.md
suggest to blow them away.

##### Next, lets code

---

### 2025-02-23:

#### Using TypeScript directly with node

From: `https://nodejs.org/en/learn/typescript/run-natively`

Since V22.6.0, Node.js has experimental support for some TypeScript
syntax via "type stripping". You can write code that's valid TypeScript
directly in Node.js without the need to transpile it first.

The --experimental-strip-types flag tells Node.js to strip the type
annotations from the TypeScript code before running it.

In V22.7.0 this experimental support was extended to transform
TypeScript-only syntax, like enums and namespace, with the addition of
the `--experimental-transform-types` flag. Enabling this flag
automatically implies that `--experimental-strip-types` is enabled.

From V23 onward, the `--experimental-strip-types` flag is enabled by
default. Disable it via `--no-experimental-strip-types` flag).
enabling you to run any supported syntax.

However, running any code that requires transformations will
still need the `--experimental-transform-type` flag.

Currently using the latest LTS release: v22.14.0

---

### 2025-02-23:

#### parseArgs

Consolidated projects cmd_line_args and hw. Now using the shebang file
`hw/hw_server` to give my "Hello World!" server commandline processing.
So far just printing out what was past.

```bash
    $ ./hw_service --name=Foofoo -l --logfile=foofoo
    {
      values: [Object: null prototype] {
        name: 'Foofoo',
        log: true,
        logfile: 'foofoo'
      },
      positionals: []
    }
    ^C                                                              …grs@hamilton4: ~/devel/grok/grok-typescript/projects/hw] (main =)
    $ ./hw_service --name=Foofoo --logfile=foofoo -l
    {
      values: [Object: null prototype] {
        name: 'Foofoo',
        logfile: 'foofoo',
        log: true
      },
      positionals: []
    }
    ^C
    $ ./hw_service --name=Boo --logfile boo
    {
      values: [Object: null prototype] { name: 'Boo', logfile: 'boo' },
      positionals: []
    }
    ^C
```

Some observations:

* is the JS/TS culture 2 space indentation
  * 4 seems too big
  * 2 seems too small
  * 3 is just right
  * maybe see what prettier and eslint default to
* in the case commandline scripts no sense "capturing" parsing errors
  * use cases are for
    * tooling
    * testing code
    * bench marking
* single and double quotes do the same thing
* logged values seem to be consistently JSON.
  * should I prefer single quotes

---

### 2025-03-04:

#### Starting project to learn Typescript language

Project to finally start to learn the syntax of Typescript. Why not
learn Javascript first?

* TS is a strict super set of JS
* TS is a typed and I like typed language, especially those which
  * you can do FP
  * have type inference
  * have good Neovim tooling
* JS seems to be morphing into TS
* Too much ugly, hacked up JS code in the wild
  * not looking for jobs maintaining hacked up kiddie scripted JS

##### Project details

* name: lang
* location: `projects/lang/`
* purpose: to learn the type script language
* notes: `notes/lang/`
* references: 
  * [TS for JS Progammers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

---

