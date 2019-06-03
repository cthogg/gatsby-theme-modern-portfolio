
# Gatsby Modern Portfolio Theme

Use this theme to write a portfolio from just one markdown file.

## Installation

1. On a new repo install gatsby and this theme `yarn add gatsby gatsby-theme-modern-portfolio -D`
1. Create a`gatsby-config.js` file
1. Set the `gatsby-theme-modern-portfolio` in the `__experimentalThemes` option inside your `gatsby-config.js` 

```js
module.exports = {
  __experimentalThemes: [    {
    resolve: "gatsby-theme-modern-portfolio" ,
    options: {
      siteTitle: `Your site title`,
      siteDescription: `Here is a site title`,
    }
  },]
}
```
1. Create directory `src/pages/markdown` `mkdir -p src/pages/markdown`
1. Copy and paste the code snippet below into the markdown file

```markdown
---
title: "I am Chris Hogg"
subtitle: "Web Developer"
email: "chrishogg@protonmail.com"
linkedin: "https://www.linkedin.com/in/christopher-hogg-081a41128/"
---

## Experience
- Logistic management application with [blik](http://www.blik.io)

```
1. Add `.cache` and `public` to the repo's `.gitignore` file

## Features
- Write a simple portfolio site from just one markdown file
- ability to change the styles (colors and typography)

## Out of Scope
- Ability to blog - hopefully this can be *composed* with another theme later.

## TODO:
- ability to add a favicon
- allow the user to set the font and color theme (see how [mdx-blog](https://github.com/jxnblk/gatsby-theme-mdx-blog/tree/master/example) has done this)
- integrate with netlify-cms

## With thanks to:
-  [These](https://github.com/sw-yx/gatsby-theme-dev-blog/tree/master/src) [two](https://github.com/jxnblk/gatsby-theme-mdx-blog/tree/master/example)   great working examples of themes.
-  The Gatsby team to great documentation, and their default starter from which this project was initially based off.
-  For this (WHERE) website for the style inspiration.