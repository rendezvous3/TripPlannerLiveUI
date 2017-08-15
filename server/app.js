const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const models = require('../models');
const db = models.db;
const apiRouter = require('../routes/api.js');

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '..', 'public')));





app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.send(
    // ... fill in this part
  );
});

app.use('/api', apiRouter);

app.use(function(req, res, next){
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});



db.sync()
.then(function(){
    app.listen(3000, function(){
        console.log('Server is Running!');
    })
})
.catch(console.error)
