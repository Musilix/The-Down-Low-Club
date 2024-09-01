import express from "express"; // Import express

const router = express.Router(); // Create a new router instance

router.post("/signup", function (req, res, next) {
  const userDetails = req.body;
  const userEmail = userDetails.email ?? "";

  if (userEmail) {
    res.send(`User signed up with email address:  ${userEmail}`);
  } else {
    res.send("User tried to sign up, but there was no email address included.");
  }
});

export { router as waitlistRouter }; // Export the router instance
