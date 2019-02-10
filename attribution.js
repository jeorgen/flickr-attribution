
const rp = require('request-promise');
const cheerio = require('cheerio');
const P = require('bluebird');

function get(url) {
  if (!url) {
    var result = {}
    result.author = "author here"
    result.license = ""
    result.source = ""
    return P.resolve(result)
  }
  const options = {
    uri: url,
    transform: function (body) {
      return cheerio.load(body);
    }
  };
  
  return rp(options).then($ => {
    var result = {}
    result.author = $('.attribution-info>.owner-name').text()
    result.license = $('.photo-license-url').attr('href')
    result.source = url
    return result
  })

}

module.exports = {get}