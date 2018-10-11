// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/rashmi/Github/personal-website-react/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/rashmi/Github/personal-website-react/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/rashmi/Github/personal-website-react/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/rashmi/Github/personal-website-react/src/pages/index.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/rashmi/Github/personal-website-react/src/pages/contact.js")),
  "component---src-pages-projects-js": preferDefault(require("/Users/rashmi/Github/personal-website-react/src/pages/projects.js")),
  "component---src-pages-recommendation-js": preferDefault(require("/Users/rashmi/Github/personal-website-react/src/pages/recommendation.js"))
}

exports.json = {
  "layout-index.json": require("/Users/rashmi/Github/personal-website-react/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/rashmi/Github/personal-website-react/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/rashmi/Github/personal-website-react/.cache/json/404.json"),
  "index.json": require("/Users/rashmi/Github/personal-website-react/.cache/json/index.json"),
  "404-html.json": require("/Users/rashmi/Github/personal-website-react/.cache/json/404-html.json"),
  "contact.json": require("/Users/rashmi/Github/personal-website-react/.cache/json/contact.json"),
  "projects.json": require("/Users/rashmi/Github/personal-website-react/.cache/json/projects.json"),
  "recommendation.json": require("/Users/rashmi/Github/personal-website-react/.cache/json/recommendation.json")
}