
// var mysql = require("mysql");

// class DBConnection {
//   constructor(host, port, user, psswd, dbname) {
//     console.log("connecting to db... psswd:" + psswd + " dbname: " + dbname);
//     this.connection = mysql.createConnection({
//       host: host,
//       port: port,
//       user: user,
//       password: psswd,
//       database: dbname,
//       typeCast: function castField(field, useDefaultTypeCasting) {
//         // We only want to cast bit fields that have a single-bit in them. If the field
//         // has more than one bit, then we cannot assume it is supposed to be a Boolean.
//         if ((field.type === "BIT") && (field.length === 1)) {

//           var bytes = field.buffer();
//           // A Buffer in Node represents a collection of 8-bit unsigned integers.
//           // Therefore, our single "bit field" comes back as the bits '0000 0001',
//           // which is equivalent to the number 1.
//           return (bytes[0] === 1);
//         }
//         return (useDefaultTypeCasting());
//       }
//     });

//     this.connection.connect(function (err) {
//       if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//       }
//       console.log("connected");
//     });
//   };

//   endConnection(){
//     this.connection.end();
//   }
// }



// module.exports = DBConnection;

require("dotenv").config();
var keys = require("./keys.js");

// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Isengard123!", //keys.dbInfo.psswd,
  database: "burgers_db" //keys.dbInfo.dbName
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
