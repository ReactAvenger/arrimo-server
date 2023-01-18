const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token =
    req?.body?.jwt ||
    req?.query?.jwt ||
    req?.headers["x-access-token"] ||
    req?.headers["authorization"];

  // check token 
  if (token) {
    jwt.verify(token, process.env.ACCESS_TOKEN_KEY, function (err, decoded) {
      if (err) {
        return res
          .status(401)
          .json({ error: true, message: "Unauthorized access." });
      }
      req.decoded = decoded;
      next();
    });
  } else {
    return res.status(403).send({
      error: true,
      message: "No token provided.",
    });
  }
};
