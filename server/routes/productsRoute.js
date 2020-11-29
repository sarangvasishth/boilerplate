const express = require('express');
const router = express.Router();

const dbase = require('../../database/dbase');

router.get("/", (req, res) => {

  return res.status(200).json({
    success: true,
    data: 'Backend is up and running!'
  });
  // db.query(`SELECT * FROM kazamindb.products`, (error, rows) => {
  //   console.log(rows);

  // })


});


module.exports = router;

