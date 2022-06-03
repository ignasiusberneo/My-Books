const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://ignasiusberneo:bahagia33.@cluster0.gtzwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

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
