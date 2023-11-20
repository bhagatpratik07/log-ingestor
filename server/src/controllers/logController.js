const Log = require("../models/logModel");

const logController = {
  ingestLog: async (req, res) => {
    try {
      const logData = req.body;
      const log = new Log(logData);
      await log.save();

      res.status(201).json({ message: "Log ingested successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

module.exports = logController;
