const express = require("express");
const path = require("path");
//const { dirname } = require("path/posix");

const app = express();

app.use(express.static(__dirname + "/dist/angular-forms"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(dirname + "/dist/angular-forms/login.component.html"));
});

app.listen(process.env.PORT || 3000);
