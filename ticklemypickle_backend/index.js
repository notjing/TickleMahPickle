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
    const jarsCollection = db.collection("testJars");
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


    app.post("/api/users", async (req, res) => {
      try {
        const user = req.body;
        console.log("Received user to add:", user);
        const result = await usersCollection.insertOne(user);
        console.log("Insert result:", result);
        res.status(201).json(result);
      } catch (err) {
        console.error("Insert error:", err);
        res.status(500).json({ error: "Insert failed" });
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

    // Create a new jar with member emails (convert to user IDs)
    app.post("/api/jars", async (req, res) => {
      try {
        const { name, emails } = req.body; // expects { name: 'Jar Name', emails: [ ... ] }
        if (!name || !Array.isArray(emails)) {
          return res.status(400).json({ error: "Name and emails are required" });
        }
        // Find users by email
        const users = await usersCollection.find({ email: { $in: emails } }).toArray();
        const userIds = users.map(user => user._id);
        console.log("GOODDD, userIds: ", userIds);
        // Insert new jar document
        const jarDoc = {
          name,
          members: userIds,
          createdAt: new Date()
        };
        const result = await jarsCollection.insertOne(jarDoc);
        console.log("WAHTS GOOD");
        res.status(201).json({ success: true, jarId: result.insertedId });
      } catch (err) {
        console.error("Error creating jar:", err);
        res.status(500).json({ error: "Internal server error" });
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

     app.post("/api/transactions", async (req, res) => {
        try {
            const transaction = req.body;
            console.log("Received transaction to add:", transaction);
            const result = await transactionCollection.insertOne(transaction);
            console.log("Insert result:", result);
            res.status(201).json(result);
        } catch (err) {
            console.error('Insert error:', err);
            res.status(500).json({ error: 'Insert failed' });
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
