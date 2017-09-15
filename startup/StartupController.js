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
        companyName : req.body.name,
        fundingStage : req.body.email,
        engaged : req.body.password,
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
    function (err, user) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).send(user);
    });
});

// RETURNS ALL THE STARTUPS IN THE DATABASE
router.get('/', function (req, res) {
    console.log("Getting all startups...");
    Startup.find({}).exec(function(err, users) {
        if (err) return res.status(500).send("There was a problem finding the startups.");
        res.status(200).send(users);
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function (req, res) {
    Startup.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Startup.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User: "+ user.name +" was deleted.");
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
});


module.exports = router;