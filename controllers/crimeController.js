const Crime = require("../models/Crime");

// Gets all crime
exports.getAllCrime = async (req, res) => {
  try {
    const allCrime = await Crime.find().limit(25).sort({'Date Rptd': -1});
    return res.status(200).json(allCrime);
  } catch (e) {
    res.send(e);
  }
};

// Gets a limited number of crime
exports.getLimitedCrime = async (req, res) => {
  try {
    const {amount} = req.params;

    const allCrime = await Crime.find().limit(amount).sort({'Date Rptd': -1});
    return res.status(200).json(allCrime);
  } catch (e) {
    res.send(e);
  }
};

// Gets a count of all crime
exports.getAllCrimeCount = async (req, res) => {
  try {
    const estimate = await Crime.estimatedDocumentCount()

    return res.status(200).json(estimate);
  } catch (e) {
    res.send(e);
  }
};

// Get count on the victims gender: female, male or other
exports.getGenderCount = async (req, res) => {
  try {
    const response = await Crime.aggregate([
      {
        $facet: {
          "male": [
            { $match: { "Vict Sex": "M" } },
            { $count: "count" }
          ],
          "female": [
            { $match: { "Vict Sex": "F" } },
            { $count: "count" }
          ],
          "other": [
            { $match: { "Vict Sex": { $nin: ["M", "F"] } } },
            { $count: "count" }
          ]
        }
      },
      {
        $project: {
          _id: 0,
          male: { $ifNull: [{ $arrayElemAt: ["$male.count", 0] }, 0] },
          female: { $ifNull: [{ $arrayElemAt: ["$female.count", 0] }, 0] },
          other: { $ifNull: [{ $arrayElemAt: ["$other.count", 0] }, 0] }
        }
      }
    ]);


    return res.status(200).json(response);
  } catch (e) {
    res.send(e);
  }
};

// Gets the different weapons used in crimes
exports.getWeaponsCount = async (req, res) => {
  try {
    const response = await Crime.aggregate([
      {
        $group: {
          _id: "$Weapon Desc",
          count: { $count: { } }
        }
      }, {
        $sort: { count: -1 }
      }
    ]);

    return res.status(200).json(response);
  } catch (e) {
    res.send(e);
  }
};

// Gets the streets where crime has occurred
exports.getStreetCount = async (req, res) => {
  try {
    const response = await Crime.aggregate([
      {
        $group: {
          _id: "$LOCATION",
          count: { $count: { } }
        }
      },
      {
        $match: {
          count: { $gt: 45 }
        }
      },
      {
        $sort: { count: 1 }
      }
    ]);

    return res.status(200).json(response);
  } catch (e) {
    res.send(e);
  }
};

// Gets the area where crimes has occurred
exports.getAreaCount = async (req, res) => {
  try {
    const response = await Crime.aggregate([
      {
        $group: {
          _id: "$AREA NAME",
          count: { $count: { } }
        }
      },
      {
        $match: {
          count: { $gt: 200 }
        }
      },
      {
        $sort: { count: 1 }
      }
    ]);

    return res.status(200).json(response);
  } catch (e) {
    res.send(e);
  }
};

// Gets the different crimes
exports.getCrimesDesc = async (req, res) => {
  try {
    const response = await Crime.aggregate([
      {
        $group: {
          _id: "$Crm Cd Desc",
          count: { $count: { } }
        }
      },
      {
      $sort: { count: -1 }
      }
    ]);

    return res.status(200).json(response);
  } catch (e) {
    res.send(e);
  }
};

// Gets the crimes with date
exports.getCrimeDates = async (req, res) => {
  try {
    const response = await Crime.aggregate([
      {
        $group: {
          _id: "$DATE OCC",
          count: { $count: { } }
        }
      }, {
        $sort: { count: -1 }
      }
    ]);

    return res.status(200).json(response);
  } catch (e) {
    res.send(e);
  }
};

// Gets the crimes with date
exports.getCrimeDatesByYear = async (req, res) => {
  try {
    const {year} = req.params;

    const response = await Crime.aggregate([
      {
        $match: { "DATE OCC": new RegExp(year) }
      },
      {
        $group: {
          _id: "$DATE OCC",
          count: { $count: { } }
        }
      },
      {
        $sort: { count: -1 }
      }
    ]);

    return res.status(200).json(response);
  } catch (e) {
    res.send(e);
  }
};

// Gets the crimes with date
exports.getCrimeTimes = async (req, res) => {
  try {
    const response = await Crime.aggregate([
      {
        $group: {
          _id: "$TIME OCC",
          count: { $count: { } }
        }
      }, {
        $sort: { count: -1 }
      }
    ]);

    return res.status(200).json(response);
  } catch (e) {
    res.send(e);
  }
};
