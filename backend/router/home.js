const express = require("express");

const selectHandler = require("../services/selectService");
const selectphotoHandler = require("../services/selectPhotoService")

const router = express.Router(); // get an instance of the express Router

router.post("/select", selectHandler);
router.post("/selectphoto", selectphotoHandler);

module.exports=router