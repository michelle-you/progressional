var db = require("../models");

module.exports = function(app) {
  // Get all Measurements
  app.get("/api/measurements", function(req, res) {
    db.Measurements.findAll({}).then(function(dbMeasurements) {
      res.json(dbMeasurements);
    });
  });

  //Get all Users
  app.get("/api/users", function(req, res) {

    db.User.findAll({
      include: [db.Measurements]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  //Create a new User
  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  //Create a new Measurement
  app.post("/api/measurements", function(req, res) {
    db.Measurements.create(req.body).then(function(dbMeasurements) {
      res.json(dbMeasurements);
    });
  });

//closes modules exports
};
