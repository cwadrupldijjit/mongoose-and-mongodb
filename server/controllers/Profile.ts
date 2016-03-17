import { Profile } from '../models/Profile';

const ProfilesController = {
	getAll_abc(req, res) {
		Profile
			.find({})
			.setOptions({sort: 'name'})
			.exec((err, profiles) => {
				if (err)
					return res.status(500).send({message: 'an error occurred when looking up all profiles', originalError: err});
				
				if (!profiles.length)
					return res.status(404).send({message: 'unable to locate any profiles'});
				
				return res.send(profiles);
			})
	},
	
	getAll_abcOpposite(req, res) {
		Profile
			.find({})
			.setOptions({sort: '-name'})
			.exec((err, profiles) => {
				if (err)
					return res.status(500).send({message: 'an error occurred when looking up all profiles', originalError: err});
				
				if (!profiles.length)
					return res.status(404).send({message: 'unable to locate any profiles'});
				
				return res.send(profiles);
			})
	},
	
	getOne(req, res) {
		if (req.params.id == 'me') {
			let userId = 1;
			
			Profile
				.findOne({userId})
				.exec((err, profile) => {
					if (err)
						return res.status(500).send({message: 'an error occurred when trying to look up profile with id ' + req.params.id, originalError: err});
					
					if(!profile)
						return res.status(404).send('Unable to locate profile associated with the indicated userId: ' + userId);
					
					return res.send(profile);
				});
		} else {
			Profile
				.findById(req.params.id)
				.exec((err, profile) => {
					if (err)
						return res.status(500).send({message: 'encountered an error when looking up profile with id ' + req.params.id, originalError: err});
					
					if (!profile)
						return res.status(404).send({message: 'unable to find the profile with id ' + req.params.id});
					
					return res.send(profile);
				});
		}
		
	},
	
	create(req, res) {
		let {name, username, email} = req.body;
		let createdOn = new Date();
		
		let newProfile = new Profile({
			name,
			username,
			email,
			createdOn
		});
		
		newProfile.save((err, profile) => {
			if (err)
				return res.status(500).send({message: 'there was an error saving the profile', originalError: err});
			
			if(!profile)
				return res.status(404).send({message: 'Unable to locate profile associated with the indicated id: ' + req.params.id});
			
			return res.send(profile);
		});
	},
	
	update(req, res) {
		const searchId = req.params.id;
		console.log(searchId);
		if (!searchId)
			return res.status(404).send('No profile id specified');
		
		Profile
			.findOneAndUpdate({_id: searchId}, req.body)
			.exec((err, profile) => {
				if (err)
					return res.status(500).send({message: 'Error when looking for profile with the id of ' + searchId + ' and the update body of ' + req.body, originalError: err});
			
				if(!profile)
					return res.status(404).send({message: 'Unable to locate profile associated with the indicated id: ' + req.params.id});
				
				console.log(profile);
				return res.send(profile);
			});
	}
};

export { ProfilesController };