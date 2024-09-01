var express = require("express");
var router = express.Router();

router.post("/signup", function (req, res, next) {
  const userDetails = req.body;
  const userEmail = userDetails.email ?? "";

  if (userEmail) {
    res.send(`User signed up with email address:  ${userEmail}`);
  } else {
    res.send("User tried to sign up, but there was no email address included.");
  }
});

module.exports = router;
