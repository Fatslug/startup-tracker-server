var mongoose = require('mongoose');
var StartupSchema = new mongoose.Schema({
	companyName: String,
	fundingStage: String,
	engaged: Boolean,
	typeOfTech: String,
	summary: String,
	website: String,
	potentialApplications: [{ 
		value: String 
	}],
	securityLevel: Number,
	comments: [{
		title: String,
		body: String,
		author: { type: Object },
		timestamp: String
	}],
	createdTimestamp: Date,
	modifiedTimestamp: Date,
	author: { type: Object }
});
mongoose.model('Startup', StartupSchema);

module.exports = mongoose.model('Startup');