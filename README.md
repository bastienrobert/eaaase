# Ease

Some ease functions

## How to use

You can download the index.js and add it to your project, or:

```
npm install eaaase
```

then

```js
import Ease from 'eaaase'
// or
const Ease = require('eaaase')

Ease.linear(currentTime, from, to, duration)
```

## Example

[Example](https://bastienrobert.github.io/eaaase/) using canvas 2d and easeInCubic function.

## Functions

- **linear** : _no easing, no acceleration_
- **quadratic**
- **cubic**
- **quartic**
- **quintic**
- **sine**
- **expo**
- **circular**
- **back**
- **bounce**
- **elastic**

Inspired from http://gizma.com/easing/
