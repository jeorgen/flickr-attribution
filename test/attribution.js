const attribution = require('../attribution')

const url = 'https://www.flickr.com/photos/152342724@N04/29678920088/in/photostream/'
attribution.get(url).done(console.log)