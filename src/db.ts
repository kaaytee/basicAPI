import { ClientEncryption } from "mongodb";

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority"; 
// "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const db = client.db("sample_airbnb");
    const coll = db.collection("listingsAndReviews");
    // find code goes here
    const cursor = coll.find();
    // iterate code goes here
    await cursor.forEach(console.log);


} finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
