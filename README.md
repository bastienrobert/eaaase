<h1 align="center">Ease</h1>

<h4 align="center">Some ease functions</h4>

<blockquote align="center">
  <em>Developped to be used with really old browsers and with or without module bundler.</em><br>
  <em>Fast & <b>~1kb</b> gzipped</em>
</blockquote>

<p align="center">
  <a href="https://badge.fury.io/js/eaaase">
    <img alt="" src="https://badge.fury.io/js/eaaase.svg">
  </a>
  <a aria-label="install size" href="https://bundlephobia.com/result?p=eaaase">
    <img alt="" src="https://badgen.net/bundlephobia/minzip/eaaase">
  </a>
  <a aria-label="license" href="https://github.com/bastienrobert/eaaase/blob/master/LICENSE">
    <img alt="" src="https://img.shields.io/github/license/bastienrobert/eaaase.svg">
  </a>
</p>

[Example](https://bastienrobert.github.io/eaaase/example) using canvas 2d and easeInCubic function.

## Install

```
npm install eaaase
```

## Usage

```
import Ease from "eaaase";
// or
const Ease = require("eaaase");

Ease.linear(currentTime, from, to, duration);
})
```

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
