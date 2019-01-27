let orm = require("../config/orm.js");


//store our keys and values on ver burger
let burger = {
    selectAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },
    insertOne: function (burger_name, cb) {
        orm.insertOne(burger_name, function (res) {
            cb(res);
        });
    },
    updateOne: function (id, cb) {
        orm.updateOne(id, function (res) {
            cb(res);
        });
    }
    // ,
    // deleteOne: function (condition, cb) {
    //     orm.delete("burgers", condition, function (res) {
    //         cb(res);
    //     });
    // }

};


module.exports = burger;