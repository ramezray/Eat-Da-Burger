let orm = require("../config/orm.js");


//store our keys and values on ver burger
let burger = {
    insertOne: function () {
        orm.insertOne("burgers", "burger_name", "devoured", "BIGBIG_Mac", false)
    },

    updateOne: function () {
        orm.updateOne("burgers", "devoured", true, "id", "4")
    },
    selectAll: function () {
        orm.selectAll("burgers")
    }
}
// console.log("burgers_controllers.js is connected");
// console.table(queries);


// burger.selectAll("burgers");

module.exports = burger;