const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/chris/repos/chrishoggdotnet/example/.cache/dev-404-page.js"))),
  "component---gatsby-theme-clear-blog-src-pages-404-js": hot(preferDefault(require("/home/chris/repos/chrishoggdotnet/gatsby-theme-clear-blog/src/pages/404.js"))),
  "component---gatsby-theme-clear-blog-src-pages-index-js": hot(preferDefault(require("/home/chris/repos/chrishoggdotnet/gatsby-theme-clear-blog/src/pages/index.js"))),
  "component---gatsby-theme-clear-blog-src-pages-page-2-js": hot(preferDefault(require("/home/chris/repos/chrishoggdotnet/gatsby-theme-clear-blog/src/pages/page-2.js")))
}

