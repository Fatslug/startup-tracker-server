var mongoose = require('mongoose');
var StartupSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	companyName: String,
	fundingStage: String,
	engaged: Boolean,
	typeOfTech: String,
	summary: String,
	website: String,
	potentialApplications: { type: Array },
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