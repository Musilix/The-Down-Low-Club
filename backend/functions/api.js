// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express, { Router } from "express";
import createError from "http-errors";
import path from "path";
import serverless from "serverless-http";
import { indexRouter } from "../routes/index";
import { waitlistRouter } from "../routes/waitlist";

// Define express app!
const api = express();

// Define middlewares!
api.use(express.json());
api.use(express.urlencoded({ extended: false }));
api.use(express.static(path.join(__dirname, "public")));

// Import bundled routers
api.use("/api", indexRouter);
api.use("/api/waitlist", waitlistRouter);

// Set up handlers for errors
api.use(function (req, res, next) {
  next(createError(404));
});

// error handler
api.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export const handler = serverless(api);
