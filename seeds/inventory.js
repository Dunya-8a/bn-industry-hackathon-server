// import seed data files, arrays of objects
const inventoryData = require("../seed_data/inventory_seed");

exports.seed = function (knex) {
	return knex("inventory")
		.del()
		.then(function () {
			return knex("inventory").insert(inventoryData);
		});
};
