//Our Object Relational Mapping between DB and the rest of the APP.
let connection = require("./connection.js");
const style = require("chalk");

let orm = {
    selectAll: function (cb) {
        let queryString = "select * from burgers";
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            console.log(style.bgGreen("Connected!!"))
            console.table(result)
            cb(result)
        })
    },
    insertOne: function (burger_name, cb) {
        connection.query('INSERT INTO burgers SET ?', {
                burger_name: burger_name,
                devoured: false,
            },
            function (err, result) {
                if (err) throw err;
                cb(result);
            });

    },
    updateOne: function(ID, cb)
	{
		connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: ID}],
			function(err, result)
			{
				if (err) throw err;
				cb(result);
			});
	},
    deleteOne: function (table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }

}




module.exports = orm