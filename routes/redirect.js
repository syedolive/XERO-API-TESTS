var express = require('express');
var router = express.Router();
import xero from '../xero_client/client';
/* GET home page. */
router.get('/', async (req, res, next) => {
  try{
    const token = await xero.apiCallback(req.url);
    res.send(token);
  }catch(e){
      console.log(e);
  }
  
});

module.exports = router;
