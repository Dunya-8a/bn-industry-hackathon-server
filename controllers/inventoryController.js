const knex = require("knex")(require("../knexfile").development);

exports.index = (_req, res) => {
	knex("inventory")
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => res.status(400).send(`Error retrieving items: ${err}`));
};

exports.addInventory = (req, res) => {
	// Validate the request body for required data
	if (
		!req.body.company_name ||
		!req.body.title ||
		!req.body.category ||
		!req.body.quantity ||
		!req.body.condition ||
		!req.body.price ||
		!req.body.location ||
		!req.body.phone_no
	) {
		return res
			.status(400)
			.send("Please make sure to provide all required fields in a request");
	}

	knex("inventory")
		.insert(req.body)
		.then((data) => {
			console.log(data);
			// For POST requests we need to respond with 201 and the location of the newly created record
			const newInventoryURL = `/${data[0]}`;
			res.status(201).location(newInventoryURL).send(newInventoryURL);
		})
		.catch((err) => res.status(400).send(`Error creating item: ${err}`));
};

exports.deleteInventory = (req, res) => {
	knex("inventory")
		.delete()
		.where({ id: req.params.id })
		.then(() => {
			// For DELETE response we can use 204 status code
			res.status(204).send(`Item with id: ${req.params.id} has been deleted`);
		})
		.catch((err) =>
			res.status(400).send(`Error deleting item ${req.params.id} ${err}`)
		);
};
