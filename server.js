const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

const inventoryRoutes = require("./routes/inventoryRoutes");

app.use(express.json());
app.use("/", inventoryRoutes);

app.listen(PORT, () => {
	console.log(`running at http://localhost:${PORT}`);
});
