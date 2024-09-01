import express from "express";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("You're live!");
});

export { router as indexRouter };
