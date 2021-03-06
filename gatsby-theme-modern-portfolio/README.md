# Gatsby Modern Portfolio Theme

One file developer portfolios.

That's correct. Create your portfolio from just one markdown file. 

## Features

- Write a simple portfolio site from just one markdown file
- change the site's ui with simple theming.
- (coming soon): Deploy to netlify in one click.


## Out of Scope
- Ability to blog - hopefully this can be *composed* with another theme later.

## Installation

1. On a new repo install gatsby and this theme `yarn add gatsby gatsby-theme-modern-portfolio -D`
1. Create a`gatsby-config.js` file in the root
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
1. Create `index.md` in `src/pages/markdown` and add the following to it

```markdown
---
title: "John Doe"
subtitle: "My Website"
email: "john@doe.com"
linkedin: "https://www.linkedin.com/in/john_doe"
textColor: 'black'
backgroundColor: '#e5f1f6'
fontUrl: '"https://fonts.googleapis.com/css?family=Overlock&display=swap"'
fontFamily: 'Overlock, cursive;'
---

## Experience
- Building websites

```
1. Add `.cache` and `public` to the repo's `.gitignore` file

1. Run with `yarn gatsby develop`  

1. (coming soon): Deploy to netlify to see it live!

### Selecting Fonts
1. Select your chosen font from Google Fonts. 
1. Copy and paste the font url to `index.md`
1. Copy and paste the fontFamily to index.md. *Make sure to remove the quotation marks so that `font-family: 'Overlock', cursive;` becomes `fontFamily: 'Overlock, cursive`

## TODO:
- Easily deploy to netlify.
- ability to add a favicon
- integrate with netlify-cms (this can come a bit later because the "cms" is very easy with one file!)

## With thanks to:
-  [These](https://github.com/sw-yx/gatsby-theme-dev-blog/tree/master/src) [two](https://github.com/jxnblk/gatsby-theme-mdx-blog/tree/master/example)   great working examples of themes.
-  The Gatsby team to great documentation, and their default starter from which this project was initially based off.
-  For this (WHERE) website for the style inspiration.