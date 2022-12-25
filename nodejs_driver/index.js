const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://test1:lastborn231@cluster0.5khyjsv.mongodb.net/test"; 
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('sample_mflix');
    const collection = db.collection('movies');

    // Find the first document in the collection
    const first = await collection.findOne();
    console.log(first);
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}
run().catch(console.error);