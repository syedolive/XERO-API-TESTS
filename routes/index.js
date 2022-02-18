var express = require('express');
var router = express.Router();
import xero from '../xero_client/client';
import { Invoice } from "xero-node";
import client, {db} from '../database/mongo';

/* GET home page. */
router.get('/', async (req, res, next) => {
  client.connect(async err => {
    if(err){
      res.send('error: mongo not connected');
    }
   try{
    const tokenSet = await xero.getClientCredentialsToken();
    await xero.setTokenSet(tokenSet);
    // const collection = db.collection('auth_token');
    // const insertToDb = await collection.insertOne(tokenSet);
    res.send(tokenSet);
   }catch(e){
     throw e;
   }
    
  })
});

module.exports = router;

