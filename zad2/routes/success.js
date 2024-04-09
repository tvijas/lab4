const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/success", (request, response, next) => {
    response.render("Success", {
        pageTitle: "Success"
    });
});

module.exports = router;