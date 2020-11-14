# Man(ual) page converter for Asciidoctor.js

[![Build status](https://github.com/Mogztter/asciidoctor-manpage.js/workflows/Build/badge.svg)](https://github.com/Mogztter/asciidoctor-manpage.js/actions?query=workflow%3ABuild)
[![npm version](http://img.shields.io/npm/v/@asciidoctor/manpage-converter.svg)](https://www.npmjs.com/package/@asciidoctor/manpage-converter)

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
