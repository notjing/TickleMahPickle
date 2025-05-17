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


const PORT = 5000;

async function connectToMongo() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("testdatabase");
    const usersCollection = db.collection("testcollection");
    const transactionCollection = db.collection("testTransactions");


    //GET FUNCTIONS
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

    app.get("/api/users/email/:email", async (req, res) => {
        try {
            const email = decodeURIComponent(req.params.email);
            console.log(email);
            const user = await usersCollection.findOne({ email: email });
            res.json({ exists: !!user });
        } catch (err) {
            console.error("Error checking user by email:", err);
            res.status(500).json({ error: "Internal server error" });
        }
    });

    //transactions
    app.get("/api/transactions", async (req, res) => {
      try {
        const transactions = await transactionCollection.find({}).toArray();
        res.json(transactions);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch transactions" });
      }
    });


    //POST FUNCTIONS
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

    // Check if user with email and password exists
    app.post("/api/users/check", async (req, res) => {
      try {
        const { email, password } = req.body;

        if (!email || !password) {
          return res.status(400).json({ error: "Email and password required" });
        }

        // Find user by email
        const user = await usersCollection.findOne({ email: email });

        if (!user) {
          // No user with this email
        console.log("Email does not exist. Log in failed!");
          return res.json({ exists: false });
        }

        // For now, plaintext password check
        if (user.password === password) {
            console.log("log in good!");
          return res.json({ exists: true });
        } else {
            console.log("Password incorrect. Log in failed!");

          return res.json({ exists: false });
        }
      } catch (err) {
        console.error("Error checking user credentials:", err);
        res.status(500).json({ error: "Internal server error" });
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
