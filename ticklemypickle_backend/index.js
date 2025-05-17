// backend/index.js
const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

//middleware
const app = express();
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://ethanlinsy:mongo@cluster0.vtbrvp2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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
    const transactionCollection = db.collection("testTransactions");

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

    app.post("/api/users", async (req, res) => {
        try {
            const user = req.body;
            console.log("Received user to add:", user);
            const result = await usersCollection.insertOne(user);
            console.log("Insert result:", result);
            res.status(201).json(result);
        } catch (err) {
            console.error('Insert error:', err);
            res.status(500).json({ error: 'Insert failed' });
        }
    });


    app.get("/api/transactions", async (req, res) => {
      try {
        const transactions = await transactionCollection.find({}).toArray();
        res.json(transactions);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch transactions" });
      }
    });


    // Start server after Mongo connection
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });

    // await users.updateOne(
    //     { _id: new ObjectId("682822f3b888dbe6840581a6") },
    //     { $set: { money: 250 } }
    // );


  } catch (err) {
    console.error("MongoDB connection failed:", err);
  }

}

connectToMongo();
