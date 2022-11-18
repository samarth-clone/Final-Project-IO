import express from "express";
import cors from "cors";
import { addActivity, deleteActivity, getAcivity } from "./activities.js";

const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());

// middleware?
app.use(function (req, res, next) {
  console.log("Received " + req.method + " request");
  next();
});

// Get all todos
app.get("/activities", (req, res) => {
  const activities = getAcivity();
  res.json(activities);
});

// add a todo
app.post("/activities", (req, res) => {
  const body = req.body;
  const act = body.act;
  addActivity(act);
  res.send("");
});

// delete a todo
app.delete("/activities/:index", (req, res) => {
  const index = parseInt(req.params.index);
  deleteActivity(index);
  res.send("");
});

// listen to a port and start web server
app.listen(PORT, () => {
  console.log("listening on port 5000.");
});