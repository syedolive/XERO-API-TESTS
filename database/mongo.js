const { MongoClient } = require('mongodb');
const uri = "mongo_connection_string";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
export const db = client.db("utonapp");
export default client;
