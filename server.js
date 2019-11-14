const express = require('express');
const request = require('request');
const app = express();
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


  
app.post('/prediction',function(req,res){
    // QPX REST API URL (I censored my api key)
  url = "http://apioussema-env.riihquu49m.eu-west-1.elasticbeanstalk.com/api";

  var requestData= {"INDUS":req.params.INDUS, "RM":req.params.RM, "AGE":req.params.AGE, "DIS":req.params.DIS, "NOX":req.params.NOX, "PTRATIO":req.params.PTRATIO};

  // fire request
  var options = {
    uri: url,
    method: 'GET',
    json:{"INDUS":"5.9", "RM":"4.7", "AGE":"80.5", "DIS":"3.7", "NOX":"0.7", "PTRATIO":"13.6"}
  };
  var message;
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Print the shortened url.
      message=body;
      res.send({"message":message});
    }
  });
    
});
app.get('/',function (req, res) {
    res.render('login.html');
});


let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
