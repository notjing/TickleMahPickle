// backend/index.js
const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

//middleware
const app = express();
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://andrewchen7101:mongo@cluster0.vtbrvp2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
const dbName = "testdatabase";
const colName = "testcollection";
const PORT = 5000;

async function connectToMongo() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("testdatabase");
    const usersCollection = db.collection("testcollection");

    // API endpoint to get all users
    app.get("/api/users", async (req, res) => {
      try {
        const users = await usersCollection.find({}).toArray();
        res.json(users);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch users" });
      }
    });

    // Start server after Mongo connection
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });

  } catch (err) {
    console.error("MongoDB connection failed:", err);
  }
}

connectToMongo();
