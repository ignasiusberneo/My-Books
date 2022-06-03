const { MongoClient } = require("mongodb");

const uri = process.env.MONGO;

const client = new MongoClient(uri);

let db;
async function connection() {
  try {
    await client.connect();
    db = client.db("myBooks");
  } catch (error) {
    console.log(error);
  }
}

function getDB() {
  return db;
}

module.exports = { connection, getDB };
