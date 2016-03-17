import mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
	name: {type: String, maxLength: 180, required: true},
	username: {type: String, unique: true, required: true},
	email: String,
	createdOn: {type: Date, required: true},
	userId: Number,
	security: { 
		questions: [ 
			{ 
				questionNum: Number, 
				question: String, 
				answer: String 
			}
		], 
		backupEmail: String,
		privacyOptions: { 
			showFullName: 	 { type: Boolean, default: false },
			showEmail: 		 { type: Boolean, default: false },
			showFacebookUrl: { type: Boolean, default: false },
			showTwitterUrl:  { type: Boolean, default: false },
			showGoogleUrl:   { type: Boolean, default: false }
		},
	}
});

const Profile = mongoose.model('Profile', ProfileSchema);

export { Profile };