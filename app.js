const modesl = require("./models/index.js");

modesl.sequelize
	.sync()
	.then(() => {
		console.log("디비 연결 성공");
	})
	.catch((err) => {
		console.log("connected failed");
		console.log(err);
	});
