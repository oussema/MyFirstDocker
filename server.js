const express = require('express');

const app = express();
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/',function (req, res) {
    res.render('login.html');
});

let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
