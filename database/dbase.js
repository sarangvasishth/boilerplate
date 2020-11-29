// const mysql = require("mysql");

// const dbase = mysql.createPool({
//   connectionLimit: 1000,
//   host: process.env.DATABASE_HOST,
//   port: process.env.DATABASE_PORT,
//   user: process.env.DATABASE_USER,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE
// });


// dbase.getConnection((err, con) => {
//   if (err) {
//     if (con) con.release();
//     console.error(err);
//   } else {
//     console.log(con.state);
//   }
// });

// module.exports = dbase;
