# Man(ual) page converter for Asciidoctor.js

[![Build status](https://github.com/ggrossetie/asciidoctor-manpage.js/workflows/Build/badge.svg)](https://github.com/ggrossetie/asciidoctor-manpage.js/actions?query=workflow%3ABuild)
[![npm version](http://img.shields.io/npm/v/@asciidoctor/manpage-converter.svg)](https://www.npmjs.com/package/@asciidoctor/manpage-converter)

> [!WARNING]
> **This package is no longer maintained.**   
> Starting with Asciidoctor.js 4.0, the Man(ual) converter is now built into the core package.
> There's no need for a separate package anymore.
> Migration: install and use Asciidoctor.js directly:
> ```bash
> npm install @asciidoctor/core
> ```
> Please refer to the [Asciidoctor.js documentation](https://docs.asciidoctor.org/asciidoctor.js/latest/) for up-to-date usage instructions.


## Install

```sh
$ npm i @asciidoctor/core @asciidoctor/manpage-converter
```

## Usage

```javascript
var asciidoctor = require('@asciidoctor/core')()
require('@asciidoctor/manpage-converter')()

const options = {
  attributes: { backend: 'manpage', doctype: 'book' },
  standalone: true
}

const content = `= Manual page
:doctitle: Awesome Asciidoctor
:docdate: 2019-01-01

== First section

Once upon a time...`

const manpage = asciidoctor.convert(content, options)
//console.log(manpage)
```
