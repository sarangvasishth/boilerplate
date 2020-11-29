const next = require('next');
const cors = require("cors");
const logger = require('morgan');
const express = require("express");

require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({dev});
const handle = nextApp.getRequestHandler();

const PORT = process.env.PORT || 5000;

// const dbase = require('../database/dbase');
// dbase.getConnection((err, con) => {
//   if (err) {
//     if (con) con.release();
//     console.error(err);
//   } else {
//     console.log(con.state);
//   }
// });

nextApp.prepare().then(() => {

  // express code here
  const app = express();
  
  app.use(cors());
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Allows for cross origin domain request:
  // app.use(function(req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //   next();
  // });

  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send({success: false, message: "Something went wrong.", data: null});
  });

  app.use("/api/products", require("./routes/productsRoute"));

  app.get("*", (req, res) => {
    return handle(req, res); // for all the react stuff
  });
  app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`ready at http://localhost:${PORT}`);
});

})