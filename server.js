const path = require("path");
const { dirname } = require("path/posix");
const app = express();

app.use(express.static(__dirname + "/dist/angular-forms"));

app.get("/*", function (req, res) {
  res.sendFile(pass.join(dirname + "/dist/angular-forms/login"));
});

app.listen(process.env.PORT || 3000);
