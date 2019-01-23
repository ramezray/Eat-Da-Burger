//Our Object Relational Mapping between DB and the rest of the APP.
let connection = require("./connection.js");
const style = require("chalk");

let orm = {
    selectAll: (table_Name) => {
        let queryString = "select * from ??";
        connection.query(queryString, [table_Name], (err, result) => {
            if (err) throw err;
            console.log(style.bgGreen("Connected!!"))
            console.table(result)
        })
    },
    insertOne: (table_name, first_column_name,  second_column_name, first_val, second_val) => {
        let queryString = "INSERT INTO ?? (??, ??) VALUES (?,?)";
        connection.query(queryString, [table_name, first_column_name,  second_column_name, first_val, second_val], (err, result) => {
            if (err) throw err;
            console.log(style.bgGreen("New data inserted!!"))
        })

    },
    updateOne :  (table_name, column_name, first_val,ID, ID_num) => {
        let queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?;";
        connection.query(queryString, [table_name, column_name, first_val,ID, ID_num], (err, result) => {
            if (err) throw err;
            console.log(style.bgGreen("New data updated!!"))
        })

    }
}




module.exports = orm