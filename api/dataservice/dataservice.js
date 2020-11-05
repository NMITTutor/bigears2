let mysql = require('mysql');

function CheckPassword(aResFunction, pUser, pPassword){
  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'todd',
    password: '1900',
    database: 'todd'
  });

  connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });

  let sql = `Call CheckPassword(?,?)`;
  console.log([pUser,pPassword]);
  connection.query(sql, [pUser,pPassword], (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    console.log(results[0]);
    aResFunction(JSON.stringify(results[0]));
  });
  connection.end();
}


function GetUsers(aResFunction){
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'todd',
        password: '1900',
        database: 'todd'
    });

    connection.connect(function(err) {
        if (err) {
          return console.error('error: ' + err.message);
        }
      
        console.log('Connected to the MySQL server.');
      });

      let sql = `CALL GetUsers()`;

      connection.query(sql, true, (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        console.log(results[0]);
        aResFunction(JSON.stringify(results[0]));
      });
      connection.end();
}

exports.GetUsers = GetUsers;
exports.CheckPassword = CheckPassword; 
 