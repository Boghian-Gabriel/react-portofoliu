const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const sendGrid = require("@sendGrid/mail");

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Change later to only allow our server
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/api", (req, res, next) => {
  res.send("API Status: Running...");
});

app.post("/api/email", (req, res, next) => {
  console.log(req.body);

  sendGrid.setApiKey(
    "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"
  );
  const msg = {
    to: "boghiangabriel96@yahoo.com",
    from: req.body.email,
    subject: "Website Contact",
    text: req.body.message,
  };

  // DOC -> https://github.com/sendgrid/sendgrid-nodejs/tree/main/packages/mail#quick-start-hello-email
  //ES6
  // 401 -> 401 	UNAUTHORIZED 	You do not have authorization to make the request.
  sendGrid
    .send(msg)
    .then((result) => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.log("error: ", err);
      res.status(401).json({
        success: false,
      });
    });
});

//documantation -> https://www.digitalocean.com/community/tutorials/nodejs-express-basics
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`Gator app listening on port ${PORT}!`));
//app.listen(PORT, () => {
// console.log("Server starting at port ${PORT}");
//});
//("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");
