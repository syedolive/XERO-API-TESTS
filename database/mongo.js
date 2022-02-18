const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://uton:Pakkhi_01@utoapp.kpon0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
export const db = client.db("utonapp");
export default client;
