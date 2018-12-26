const h = require('vhtml')
const html = require('htm').bind(h)

const NewsLink = props => html`
  <li>
    ${props.title} (<a target="_blank" rel="noopener" href="${props.url}"
      >link</a
    >)
  </li>
`

module.exports = NewsLink
