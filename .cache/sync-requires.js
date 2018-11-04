// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/rash-ap/Documents/Github/Personal Website/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/rash-ap/Documents/Github/Personal Website/src/pages/404.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/rash-ap/Documents/Github/Personal Website/src/pages/contact.js")),
  "component---src-pages-experience-js": preferDefault(require("/Users/rash-ap/Documents/Github/Personal Website/src/pages/experience.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/rash-ap/Documents/Github/Personal Website/src/pages/index.js")),
  "component---src-pages-projects-js": preferDefault(require("/Users/rash-ap/Documents/Github/Personal Website/src/pages/projects.js")),
  "component---src-pages-recommendation-js": preferDefault(require("/Users/rash-ap/Documents/Github/Personal Website/src/pages/recommendation.js"))
}

exports.json = {
  "layout-index.json": require("/Users/rash-ap/Documents/Github/Personal Website/.cache/json/layout-index.json"),
  "404.json": require("/Users/rash-ap/Documents/Github/Personal Website/.cache/json/404.json"),
  "contact.json": require("/Users/rash-ap/Documents/Github/Personal Website/.cache/json/contact.json"),
  "experience.json": require("/Users/rash-ap/Documents/Github/Personal Website/.cache/json/experience.json"),
  "index.json": require("/Users/rash-ap/Documents/Github/Personal Website/.cache/json/index.json"),
  "projects.json": require("/Users/rash-ap/Documents/Github/Personal Website/.cache/json/projects.json"),
  "recommendation.json": require("/Users/rash-ap/Documents/Github/Personal Website/.cache/json/recommendation.json"),
  "404-html.json": require("/Users/rash-ap/Documents/Github/Personal Website/.cache/json/404-html.json")
}