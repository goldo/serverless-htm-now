const h = require('vhtml')
const html = require('htm').bind(h)

const renderPage = content =>
  html`
    <html>
      <head>
        <link
          href="https://unpkg.com/superstylin@1.0.3/src/index.css"
          rel="stylesheet"
        />
      </head>
      <body>
        ${content}
      </body>
    </html>
  `

module.exports = (req, res) => (statusCode, Component) => {
  res.writeHead(statusCode, {
    'Content-Type': 'text/html; charset=utf-8',
  })

  const renderedComponent = Component()
  // we need to wait for promises to be resolved
  if (renderedComponent.then)
    renderedComponent.then(content => res.end(renderPage(content)))
  else res.end(renderPage(renderedComponent))
}
