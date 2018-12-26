const h = require('vhtml')
const html = require('htm').bind(h)

const NewsLink = require('./components/NewsLink')
const getNews = require('./data/get-news')

module.exports = async () => {
  const news = await getNews()

  return html`
    <div>
      <h1>HTM λ News</h1>
      ${
        news.map(
          n =>
            html`
              <${NewsLink} title="${n.title}" url="${n.url}" />
            `,
        )
      }
    </div>
  `
}
