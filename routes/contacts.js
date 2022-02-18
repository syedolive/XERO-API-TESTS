var express = require('express');
var router = express.Router();
import client, {db} from '../database/mongo';
import axios from 'axios';
import xero from '../xero_client/client';
/* GET users listing. */

const _getContacts = async (token) => {
    return await await axios.get('https://api.xero.com/api.xro/2.0/contacts?summaryOnly=True',{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
}

router.get('/', async (req, res, next) => {
    client.connect(async err => {
        if(err){
            throw err;
        }
        try{
            const collection = db.collection('auth_token');
            const tokens = await collection.findOne({});
            const access_token = tokens.access_token;
           try{
                const {status, data: xeroContacts} = await _getContacts(access_token);
                const contactCollection = await db.collection('contacts');
                const contacts = await contactCollection.insertMany(xeroContacts.Contacts);
                res.send(contacts);
            }catch(e){
                if(e.response.status){
                    const tokenSet = await xero.getClientCredentialsToken();
                    xero.setTokenSet(tokenSet);
                    const collection = db.collection('auth_token');
                    const insertToDb = await collection.updateOne(
                        {access_token: access_token},
                        {$set: {access_token: tokenSet.access_token}}
                    )
                    res.send(insertToDb);
                }   
            }
        }catch(e){
            throw e
        }
    });
    const collection = db.collection('auth_token');
  
})

module.exports = router;
