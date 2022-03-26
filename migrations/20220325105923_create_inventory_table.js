/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable("inventory_data", (table) => {
		table.increments("id").primary();
		table.string("company_name").notNullable();
		table.string("title").notNullable();
		table.string("category").notNullable();
		table.string("quantity").notNullable();
		table.string("condition").notNullable();
		table.string("price").notNullable();
		table.string("location").notNullable();
		table.string("phone_no").notNullable();
		table
			.string("photo")
			.defaultTo(
				"http://www.fremontgurdwara.org/wp-content/uploads/2020/06/no-image-icon-2.png"
			);
		table.timestamp("date_added ").defaultTo(knex.fn.now());
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("inventory");
};
