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
		author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
		timestamp: String
	}],
	createdTimestamp: Date,
	modifiedTimestamp: Date,
	author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});
mongoose.model('Startup', StartupSchema);

module.exports = mongoose.model('Startup');