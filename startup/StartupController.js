var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser').json();

// router.use(bodyParser.urlencoded({ extended: true }));

var Startup = require('./Startup');

// CREATES A NEW STARTUP
router.post('/', bodyParser, function (req, res) {
    console.log("Adding Startup...");
    console.log(req.body);
    Startup.create({
        companyName : req.body.companyName,
        fundingStage : req.body.fundingStage,
        engaged : req.body.engaged,
        typeOfTech: req.body.typeOfTech,
        summary: req.body.summary,
        website: req.body.website,
        potentialApplications: req.body.potentialApplications,
        securityLevel: req.body.securityLevel,
        comments: req.body.comments,
        createdTimestamp: new Date(),
        modifiedTimestamp: new Date(),
        author: req.body.author
    }, 
    function (err, startup) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).send(startup);
    });
});

// RETURNS ALL THE STARTUPS IN THE DATABASE
router.get('/', function (req, res) {
    console.log("Getting all startups...");
    Startup.find({}).exec(function(err, startups) {
        if (err) return res.status(500).send("There was a problem finding the startups.");
        res.status(200).send(startups);
    });
});

// GETS A SINGLE STARTUP FROM THE DATABASE
router.get('/:id', function (req, res) {
    console.log("Getting startup with ID: " + req.params.id);
    Startup.findById(req.params.id, function (err, startup) {
        if (err) return res.status(500).send("There was a problem finding the startup.");
        if (!startup) return res.status(404).send("No startup found.");
        res.status(200).send(startup);
    });
});

// DELETES A startup FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Startup.findByIdAndRemove(req.params.id, function (err, startup) {
        if (err) return res.status(500).send(false);
        res.status(200).send(true);
    });
});

// UPDATES A SINGLE startup IN THE DATABASE
router.put('/:id', bodyParser, function (req, res) {
    Startup.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, startup) {
        if (err) return res.status(500).send("There was a problem updating the startup.");
        res.status(200).send(startup);
    });
});


module.exports = router;