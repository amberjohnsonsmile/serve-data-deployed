const express = require("express");
const cors = require("cors");

var cohorts = [{
	id: 1,
	name: "17-01-WD-DP",
	code: "g100",
	students: 28
},{
	id: 2,
	name: "17-01-DS-GT",
	code: "g105",
	students: 24
},{
	id: 3,
	name: "17-02-WD-PX",
	code: "g109",
	students: 30
},{
	id: 4,
	name: "17-03-WD-BD",
	code: "g110",
	students: 29
}];

function findById(data, id) {
	for (let i=0; i<data.length; i++) {
		if (data[i].id == id) {
			return data[i];
		}
	}
	return null;
}

const app = express();
app.use(cors());

app.get("/", function(request, response) {
	response.json({data: cohorts});
});

app.get("/:id", function(request, response) {
	var record = findById(cohorts, request.params.id);

	if (!record) {
		response.status = 404;
		response.json({
			error: {
				message: "No record found! D:"
			}
		});
	}

	response.json({data: record});
});

app.listen(9000);
