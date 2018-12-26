const fetch = require('node-fetch').default

const hnAlgoliaSearchUrl =
  'https://hn.algolia.com/api/v1/search_by_date?tags=front_page'

module.exports = () =>
  fetch(hnAlgoliaSearchUrl)
    .then(res => res.json())
    .then(data => data.hits.map(({ title, url }) => ({ title, url })))
