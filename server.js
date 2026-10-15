import "dotenv/config";
import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const port = process.env.PORT || 8000;
const prisma = new PrismaClient();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/sum/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  const sum = parseInt(num1) + parseInt(num2);
  res.send(`The sum of ${num1} and ${num2} is ${sum}`);
});

app.get("/tasks", async (_req, res) => {
  try {
    const tasks = await prisma.task.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(tasks);
  } catch (error) {
    console.error("Failed to fetch tasks:", error);
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
