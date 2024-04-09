const express = require("express");
const path = require("path");


const router = express.Router();

router.use((request, response, next) => {
    response.render("NotFound", {
        pageTitle: "NotFound",
    });
});

module.exports = router;