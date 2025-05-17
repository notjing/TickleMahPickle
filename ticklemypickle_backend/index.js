// backend/index.js
const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://andrewchen7101:mongo@cluster0.vtbrvp2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
const dbName = "testdatabase";
const colName = "testcollection";

app.get("/api/users", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(colName);
    const users = await collection.find({}).toArray();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving users");
  } finally {
    await client.close();
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log('Backend running on http://localhost:3000'));
