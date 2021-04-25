const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
// const routes = require('./routes');

const PORT = process.env.PORT || 3000

const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
app.use(routes);

// mongoose.connect(process.env.MONGODB.URL || 'mongodb://localhost/workout', {useNewUrlParser:true});
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

  app.use(REQUIRE("./ROUTES/API.JS"));
  app.use(REQUIRE("./ROUTES/HTML.JS"));

app.listen(PORT, () => {
    console.log('App running on port ${PORT}.');
});