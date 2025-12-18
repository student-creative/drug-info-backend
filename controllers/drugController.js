const Drug = require("../model/Drug");
const drugs = require("../data/drugs");




exports.insertMany = async (req, res) => {
  try {
    await Drug.insertMany(drugs);
    res.status(201).json({ message: "Drugs inserted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



//get drugs


exports.getDrugs = async (req, res) => {
  try {
    const { company } = req.query;

    let query = {};
    if (company) {
      query.company = company;
    }

    const data = await Drug.find(query).sort({ launchDate: -1 });

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



exports.getCompanies = async (req, res) => {
  try {
    const companies = await Drug.distinct("company");
    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
