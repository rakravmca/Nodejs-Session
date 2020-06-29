const express =  require("express");
const app = express();
let zip = require("./zip");
let io = require("./io");

const hostname = '127.0.0.1'
const port = '4000'

app.get('/', async function(req, res) {
    console.log('Zipping files...')
     zip.convert('test', 'output.zip')
     .then(t=>        
        //res.redirect('/download'),
       
        res.send("Zip done. <a href='/download'>Click here to download zip</a>")
        ).catch(e=>console.log(e))
  });

  app.get('/download', function(req, res) {
    res.download('output.zip')
   });

  app.listen(port, function() {
    console.log('Server running at http://' + hostname + ':' + port)
  })