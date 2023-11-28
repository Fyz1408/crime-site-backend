const Crime = require("../models/Crime");

// Gets all crime
exports.getAllCrime = async (req, res) => {
  console.log(req.method, req.baseUrl);
  try {
    const allCrime = await Crime.find().limit(25);
    return res.status(200).json(allCrime);
  } catch (e) {
    res.send(e);
  }
};

// Gets a limited number of crime
exports.getLimitedCrime = async (req, res) => {
  console.log(req.method, req.baseUrl, req.params);
  try {
    const { amount } = req.params;

    const allCrime = await Crime.find().limit(amount);
    return res.status(200).json(allCrime);
  } catch (e) {
    res.send(e);
  }
};

// Gets a count of all crime
exports.getAllCrimeCount = async (req, res) => {
  console.log(req.method, req.baseUrl);
  try {
    const estimate = await Crime.estimatedDocumentCount()

    return res.status(200).json(estimate);
  } catch (e) {
    res.send(e);
  }
};

// Get count on crimes female or male
exports.getGenderCount = async (req, res) => {
  console.log(req.method, req.baseUrl);

  try {
    const response = await Crime.aggregate([
      {
        $facet: {
          "maleVict": [
            {
              $match: {
                "Vict Sex": "M"
              }
            },
            {
              $count: "count"
            }
          ],
          "femaleVict": [
            {
              $match: {
                "Vict Sex": "F"
              }
            },
            {
              $count: "count"
            }
          ],
          "other": [
            {
              $match: {
                "Vict Sex": {
                  '$nin': ["M", "F"]
                }
              }
            },
            {
              $count: "count"
            }
          ],
        }
      }
    ]);

    return res.status(200).json(response);
  } catch (e) {
    res.send(e);
  }
};
