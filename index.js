const express = require('express');
const app = express();
const attribution = require('./attribution');

const form = `<p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><form action="/" method="GET">
<input type="text" name="urlSpec"/>
<input type="submit" name="submit" value="submit"/>
</form>`

app.get('/', function (req, res) {
  var url = req.param("urlSpec")
  // console.log(JSON.stringify(req))
  console.log('Received url' + url)

  attribution.get(url).done(
    function (data) {
      res.send(`<html><body><p>&nbsp;</p><p>&nbsp;</p>${data.title}<p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p
      <div id='attribution-info'>Author: <a href="${data.source} ">${data.author}</a> <a href="${data.license} ">license</a></div>
      ${form}
      <script>
      </script>
          </body>
        </html>`)
    },
    function (err) {
      console.log(err.stack || err)
      res.status(500).send(err.toString());
    }
  )
})

app.listen('8081')