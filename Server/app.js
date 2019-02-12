const express = require("express");
const request = require('request');
const cors = require('cors');

var app = express();

app.use(cors());
app.options('*', cors());

app.listen(3000, () => {
 console.log("Server running on port 3000");
});


app.get("", (req, _res, next) => {
    
    var day = req.query.day;
    var month = req.query.month;
    
    request('http://numbersapi.com/'+ month + '/' + day + '?json', { json: true }, (err, res, body) => {
        if (err) { 
            _res.send(err);
            return console.log(err); 
        }
        _res.send(body);
      });
   });

  

  
  