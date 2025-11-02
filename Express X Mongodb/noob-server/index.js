const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const { MongoClient, ServerApiVersion } = require("mongodb");

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://modeluser:9zNlDx6l3xDVyDIS@smart-deals.99va52p.mongodb.net/?appName=smart-deals";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let modelCollection; // Declare this globally

async function run() {
  try {
    await client.connect();

    const db = client.db("model-db");
    modelCollection = db.collection("models");

    // Test the connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

// Define the routes after the connection is established
app.get("/models", async (req, res) => {
  try {
    if (!modelCollection) {
      return res.status(500).send("MongoDB connection not established.");
    }
    const result = await modelCollection.find().toArray();
    res.send(result);
  } catch (error) {
    res.status(500).send("Error fetching models: " + error.message);
  }
});

app.get("/", (req, res) => {
  res.send("This is the noob server");
});

// Start the MongoDB connection and then the server
run().catch(console.dir);

// Keep the MongoDB client open while the server is running
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
