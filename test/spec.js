const asciidoctor = require('@asciidoctor/core')()
require('../dist/main.js').register() // Asciidoctor ManPage
const chai = require('chai')
const expect = chai.expect

describe('Rendering', () => {
  it('should produce a manpage document when backend=manpage', () => {
    const options = { attributes: { backend: 'manpage', doctype: 'book', reproducible: '' }, standalone: true }
    const content = `= asciidoctor(1)
Dan Allen; Sarah White; Ryan Waldron
:doctype: manpage
:release-version: 2.0.7
:man manual: Asciidoctor Manual
:man source: Asciidoctor {release-version}
:page-layout: base

== NAME

asciidoctor - converts AsciiDoc source files to HTML, DocBook, and other formats

== SYNOPSIS

*asciidoctor* [_OPTION_]... _FILE_...

== DESCRIPTION

The asciidoctor(1) command converts the AsciiDoc source file(s) _FILE_ to HTML5, DocBook 5, man(ual) page, and other custom output formats.

== COPYING

Copyright \\(C) 2012-2019 Dan Allen, Ryan Waldron, and the Asciidoctor Project.
Free use of this software is granted under the terms of the MIT License.`
    const manpage = asciidoctor.convert(content, options)
    expect(manpage).to.equal(`'\\" t
.\\"     Title: asciidoctor
.\\"    Author: Dan Allen, Sarah White, Ryan Waldron
.\\" Generator: Asciidoctor 2.0.0
.\\"    Manual: Asciidoctor Manual
.\\"    Source: Asciidoctor 2.0.7
.\\"  Language: English
.\\"
.TH "ASCIIDOCTOR" "1" "" "Asciidoctor 2.0.7" "Asciidoctor Manual"
.ie \\n(.g .ds Aq \\(aq
.el       .ds Aq '
.ss \\n[.ss] 0
.nh
.ad l
.de URL
\\fI\\\\$2\\fP <\\\\$1>\\\\$3
..
.als MTO URL
.if \\n[.g] \\{\\
.  mso www.tmac
.  am URL
.    ad l
.  .
.  am MTO
.    ad l
.  .
.  LINKSTYLE blue R < >
.\\}
.SH "NAME"
asciidoctor \\- converts AsciiDoc source files to HTML, DocBook, and other formats
.SH "SYNOPSIS"
.sp
\\fBasciidoctor\\fP [\\fIOPTION\\fP]... \\fIFILE\\fP...
.SH "DESCRIPTION"
.sp
The asciidoctor(1) command converts the AsciiDoc source file(s) \\fIFILE\\fP to HTML5, DocBook 5, man(ual) page, and other custom output formats.
.SH "COPYING"
.sp
Copyright (C) 2012\\-2019 Dan Allen, Ryan Waldron, and the Asciidoctor Project.
Free use of this software is granted under the terms of the MIT License.
.SH "AUTHORS"
.sp
Dan Allen
.sp
Sarah White
.sp
Ryan Waldron`)
  })
})
