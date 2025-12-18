var express = require('express');
var router = express.Router();

var drugs = require('../controllers/drugController');

router.post("/insert", drugs.insertMany);      // one time
router.get("/", drugs.getDrugs);               // table data
router.get("/companies", drugs.getCompanies);  // dropdown


module.exports = router;
