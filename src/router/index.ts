const express = require("express");
const authentication = require("./auth");
const users = require("./users");
const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);

  return router;
};
