const { parse } = require('url')

const renderRequest = require('./render')
const Home = require('./home')
const About = require('./about')
const NotFound = require('./404.js')

module.exports = (req, res) => {
  const render = renderRequest(req, res)
  const { pathname } = parse(req.url, true)

  // temporary hack because now-lambda-runner doesn't handle request url the same way
  if (process.env.NODE_ENV !== 'production') return render(200, Home)

  if (req.method !== 'GET') return render(404, NotFound)

  if (pathname === '/') {
    return render(200, Home)
  }
  if (pathname === '/about') {
    return render(200, About)
  }

  return render(404, NotFound)
}
