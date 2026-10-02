# JavaScript Concepts

A collection of small, self-contained JavaScript examples covering core language fundamentals, object-oriented programming, asynchronous patterns, and common coding exercises. Each file focuses on one concept and is heavily commented with expected output.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later (needed for the built-in `fetch` used in `fetchapi.js`)

### Running an example

Each file runs on its own. No dependencies or build step are required.

```bash
node arrays.js
node promiseAll.js
```

## Contents

### Basics

| File | Topic |
| --- | --- |
| [variables.js](variables.js) | `var`, `let`, `const` and scoping rules |
| [typeof.js](typeof.js) | Checking data types with `typeof` |
| [ifelseswitch.js](ifelseswitch.js) | `if` / `else if` / `else` and `switch` statements |
| [loops.js](loops.js) | `for`, `for...of`, `for...in`, `while`, `do...while` |
| [console.js](console.js) | Console methods: `log`, `error`, `warn`, `info`, `table`, and more |
| [templateliterals.js](templateliterals.js) | Template literals and string interpolation |
| [quicktips.js](quicktips.js) | Handy one-liners and type conversion tricks |

### Functions

| File | Topic |
| --- | --- |
| [functions.js](functions.js) | Function declarations, expressions, and anonymous functions |
| [arrowfunction.js](arrowfunction.js) | Arrow function syntax and shorthand forms |
| [callback.js](callback.js) | Callback functions |

### Arrays, Strings & Objects

| File | Topic |
| --- | --- |
| [arrays.js](arrays.js) | Creating arrays and methods like `push`, `pop`, `shift`, `slice`, `splice` |
| [arraymethods.js](arraymethods.js) | `every`, `some`, `find`, and other array helpers |
| [mapfilterreduce.js](mapfilterreduce.js) | `map`, `filter`, and `reduce` |
| [stringmethods.js](stringmethods.js) | Common string methods |
| [createobject.js](createobject.js) | Ways to create objects: literals, constructor functions, and more |
| [destructuring.js](destructuring.js) | Array and object destructuring, rest syntax, function parameters |

### Object-Oriented Programming

| File | Topic |
| --- | --- |
| [classconcept.js](classconcept.js) | Classes, constructors, and creating instances with `new` |
| [inheritance.js](inheritance.js) | Multi-level inheritance with `extends` and `super` |
| [methodoverriding.js](methodoverriding.js) | Overriding parent class methods and fields |
| [methodoverloading.js](methodoverloading.js) | Why JS doesn't support overloading, and how to emulate it |
| [static.js](static.js) | Static properties and methods |

### Asynchronous JavaScript

| File | Topic |
| --- | --- |
| [callbackhell.js](callbackhell.js) | The "pyramid of doom" and how Promises improve readability (illustrative only, not runnable) |
| [promiseconcept.js](promiseconcept.js) | Creating and consuming a Promise |
| [promisechain.js](promisechain.js) | Chaining `.then()` calls |
| [promiseAll.js](promiseAll.js) | `Promise.all()` |
| [promiseAllSettled.js](promiseAllSettled.js) | `Promise.allSettled()` |
| [promiseRace.js](promiseRace.js) | `Promise.race()` |
| [promiseAny.js](promiseAny.js) | `Promise.any()` |
| [asyncawait.js](asyncawait.js) | `async` / `await` and error handling |
| [fetchapi.js](fetchapi.js) | Fetching data from an API with `fetch` and `async`/`await` |

### Coding Exercises

| File | Topic |
| --- | --- |
| [removeduplicateelements.js](removeduplicateelements.js) | Removing duplicates from an array using `Set` |
| [reversenumber.js](reversenumber.js) | Reversing the digits of a number |
