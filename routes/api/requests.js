import paginate from "../../helpers/paginate";

import RequestModel from "../../models/Request";

import { getRequests } from "../../controllers/RequestController";

const express = require("express");

const router = express.Router();

router.get("/requests", paginate(RequestModel), (req, res) =>
  getRequests(req, res)
);

module.exports = router;
