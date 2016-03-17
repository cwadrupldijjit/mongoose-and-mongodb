"use strict";
var Profile_1 = require('../models/Profile');
var ProfilesController = {
    getAll_abc: function (req, res) {
        Profile_1.Profile
            .find({})
            .setOptions({ sort: 'name' })
            .exec(function (err, profiles) {
            if (err)
                return res.status(500).send({ message: 'an error occurred when looking up all profiles', originalError: err });
            if (!profiles.length)
                return res.status(404).send({ message: 'unable to locate any profiles' });
            return res.send(profiles);
        });
    },
    getAll_abcOpposite: function (req, res) {
        Profile_1.Profile
            .find({})
            .setOptions({ sort: '-name' })
            .exec(function (err, profiles) {
            if (err)
                return res.status(500).send({ message: 'an error occurred when looking up all profiles', originalError: err });
            if (!profiles.length)
                return res.status(404).send({ message: 'unable to locate any profiles' });
            return res.send(profiles);
        });
    },
    getOne: function (req, res) {
        if (req.params.id == 'me') {
            var userId_1 = 1;
            Profile_1.Profile
                .findOne({ userId: userId_1 })
                .exec(function (err, profile) {
                if (err)
                    return res.status(500).send({ message: 'an error occurred when trying to look up profile with id ' + req.params.id, originalError: err });
                if (!profile)
                    return res.status(404).send('Unable to locate profile associated with the indicated userId: ' + userId_1);
                return res.send(profile);
            });
        }
        else {
            Profile_1.Profile
                .findById(req.params.id)
                .exec(function (err, profile) {
                if (err)
                    return res.status(500).send({ message: 'encountered an error when looking up profile with id ' + req.params.id, originalError: err });
                if (!profile)
                    return res.status(404).send({ message: 'unable to find the profile with id ' + req.params.id });
                return res.send(profile);
            });
        }
    },
    create: function (req, res) {
        var _a = req.body, name = _a.name, username = _a.username, email = _a.email;
        var createdOn = new Date();
        var newProfile = new Profile_1.Profile({
            name: name,
            username: username,
            email: email,
            createdOn: createdOn
        });
        newProfile.save(function (err, profile) {
            if (err)
                return res.status(500).send({ message: 'there was an error saving the profile', originalError: err });
            if (!profile)
                return res.status(404).send({ message: 'Unable to locate profile associated with the indicated id: ' + req.params.id });
            return res.send(profile);
        });
    },
    update: function (req, res) {
        var searchId = req.params.id;
        console.log(searchId);
        if (!searchId)
            return res.status(404).send('No profile id specified');
        Profile_1.Profile
            .findOneAndUpdate({ _id: searchId }, req.body)
            .exec(function (err, profile) {
            if (err)
                return res.status(500).send({ message: 'Error when looking for profile with the id of ' + searchId + ' and the update body of ' + req.body, originalError: err });
            if (!profile)
                return res.status(404).send({ message: 'Unable to locate profile associated with the indicated id: ' + req.params.id });
            console.log(profile);
            return res.send(profile);
        });
    }
};
exports.ProfilesController = ProfilesController;

//# sourceMappingURL=data:application/json;base64,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TSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLDZEQUE2RCxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQztZQUV2SCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNEO0FBRVEsMEJBQWtCLHNCQUZ6QjtBQUU0QiIsImZpbGUiOiJjb250cm9sbGVycy9Qcm9maWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gJy4uL21vZGVscy9Qcm9maWxlJztcclxuXHJcbmNvbnN0IFByb2ZpbGVzQ29udHJvbGxlciA9IHtcclxuXHRnZXRBbGxfYWJjKHJlcSwgcmVzKSB7XHJcblx0XHRQcm9maWxlXHJcblx0XHRcdC5maW5kKHt9KVxyXG5cdFx0XHQuc2V0T3B0aW9ucyh7c29ydDogJ25hbWUnfSlcclxuXHRcdFx0LmV4ZWMoKGVyciwgcHJvZmlsZXMpID0+IHtcclxuXHRcdFx0XHRpZiAoZXJyKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKHttZXNzYWdlOiAnYW4gZXJyb3Igb2NjdXJyZWQgd2hlbiBsb29raW5nIHVwIGFsbCBwcm9maWxlcycsIG9yaWdpbmFsRXJyb3I6IGVycn0pO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICghcHJvZmlsZXMubGVuZ3RoKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHttZXNzYWdlOiAndW5hYmxlIHRvIGxvY2F0ZSBhbnkgcHJvZmlsZXMnfSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0cmV0dXJuIHJlcy5zZW5kKHByb2ZpbGVzKTtcclxuXHRcdFx0fSlcclxuXHR9LFxyXG5cdFxyXG5cdGdldEFsbF9hYmNPcHBvc2l0ZShyZXEsIHJlcykge1xyXG5cdFx0UHJvZmlsZVxyXG5cdFx0XHQuZmluZCh7fSlcclxuXHRcdFx0LnNldE9wdGlvbnMoe3NvcnQ6ICctbmFtZSd9KVxyXG5cdFx0XHQuZXhlYygoZXJyLCBwcm9maWxlcykgPT4ge1xyXG5cdFx0XHRcdGlmIChlcnIpXHJcblx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoe21lc3NhZ2U6ICdhbiBlcnJvciBvY2N1cnJlZCB3aGVuIGxvb2tpbmcgdXAgYWxsIHByb2ZpbGVzJywgb3JpZ2luYWxFcnJvcjogZXJyfSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKCFwcm9maWxlcy5sZW5ndGgpXHJcblx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLnNlbmQoe21lc3NhZ2U6ICd1bmFibGUgdG8gbG9jYXRlIGFueSBwcm9maWxlcyd9KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRyZXR1cm4gcmVzLnNlbmQocHJvZmlsZXMpO1xyXG5cdFx0XHR9KVxyXG5cdH0sXHJcblx0XHJcblx0Z2V0T25lKHJlcSwgcmVzKSB7XHJcblx0XHRpZiAocmVxLnBhcmFtcy5pZCA9PSAnbWUnKSB7XHJcblx0XHRcdGxldCB1c2VySWQgPSAxO1xyXG5cdFx0XHRcclxuXHRcdFx0UHJvZmlsZVxyXG5cdFx0XHRcdC5maW5kT25lKHt1c2VySWR9KVxyXG5cdFx0XHRcdC5leGVjKChlcnIsIHByb2ZpbGUpID0+IHtcclxuXHRcdFx0XHRcdGlmIChlcnIpXHJcblx0XHRcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCh7bWVzc2FnZTogJ2FuIGVycm9yIG9jY3VycmVkIHdoZW4gdHJ5aW5nIHRvIGxvb2sgdXAgcHJvZmlsZSB3aXRoIGlkICcgKyByZXEucGFyYW1zLmlkLCBvcmlnaW5hbEVycm9yOiBlcnJ9KTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYoIXByb2ZpbGUpXHJcblx0XHRcdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuc2VuZCgnVW5hYmxlIHRvIGxvY2F0ZSBwcm9maWxlIGFzc29jaWF0ZWQgd2l0aCB0aGUgaW5kaWNhdGVkIHVzZXJJZDogJyArIHVzZXJJZCk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHJldHVybiByZXMuc2VuZChwcm9maWxlKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdFByb2ZpbGVcclxuXHRcdFx0XHQuZmluZEJ5SWQocmVxLnBhcmFtcy5pZClcclxuXHRcdFx0XHQuZXhlYygoZXJyLCBwcm9maWxlKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoZXJyKVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoe21lc3NhZ2U6ICdlbmNvdW50ZXJlZCBhbiBlcnJvciB3aGVuIGxvb2tpbmcgdXAgcHJvZmlsZSB3aXRoIGlkICcgKyByZXEucGFyYW1zLmlkLCBvcmlnaW5hbEVycm9yOiBlcnJ9KTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKCFwcm9maWxlKVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLnNlbmQoe21lc3NhZ2U6ICd1bmFibGUgdG8gZmluZCB0aGUgcHJvZmlsZSB3aXRoIGlkICcgKyByZXEucGFyYW1zLmlkfSk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHJldHVybiByZXMuc2VuZChwcm9maWxlKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH0sXHJcblx0XHJcblx0Y3JlYXRlKHJlcSwgcmVzKSB7XHJcblx0XHRsZXQge25hbWUsIHVzZXJuYW1lLCBlbWFpbH0gPSByZXEuYm9keTtcclxuXHRcdGxldCBjcmVhdGVkT24gPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHJcblx0XHRsZXQgbmV3UHJvZmlsZSA9IG5ldyBQcm9maWxlKHtcclxuXHRcdFx0bmFtZSxcclxuXHRcdFx0dXNlcm5hbWUsXHJcblx0XHRcdGVtYWlsLFxyXG5cdFx0XHRjcmVhdGVkT25cclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRuZXdQcm9maWxlLnNhdmUoKGVyciwgcHJvZmlsZSkgPT4ge1xyXG5cdFx0XHRpZiAoZXJyKVxyXG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZCh7bWVzc2FnZTogJ3RoZXJlIHdhcyBhbiBlcnJvciBzYXZpbmcgdGhlIHByb2ZpbGUnLCBvcmlnaW5hbEVycm9yOiBlcnJ9KTtcclxuXHRcdFx0XHJcblx0XHRcdGlmKCFwcm9maWxlKVxyXG5cdFx0XHRcdHJldHVybiByZXMuc3RhdHVzKDQwNCkuc2VuZCh7bWVzc2FnZTogJ1VuYWJsZSB0byBsb2NhdGUgcHJvZmlsZSBhc3NvY2lhdGVkIHdpdGggdGhlIGluZGljYXRlZCBpZDogJyArIHJlcS5wYXJhbXMuaWR9KTtcclxuXHRcdFx0XHJcblx0XHRcdHJldHVybiByZXMuc2VuZChwcm9maWxlKTtcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0XHJcblx0dXBkYXRlKHJlcSwgcmVzKSB7XHJcblx0XHRjb25zdCBzZWFyY2hJZCA9IHJlcS5wYXJhbXMuaWQ7XHJcblx0XHRjb25zb2xlLmxvZyhzZWFyY2hJZCk7XHJcblx0XHRpZiAoIXNlYXJjaElkKVxyXG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDQpLnNlbmQoJ05vIHByb2ZpbGUgaWQgc3BlY2lmaWVkJyk7XHJcblx0XHRcclxuXHRcdFByb2ZpbGVcclxuXHRcdFx0LmZpbmRPbmVBbmRVcGRhdGUoe19pZDogc2VhcmNoSWR9LCByZXEuYm9keSlcclxuXHRcdFx0LmV4ZWMoKGVyciwgcHJvZmlsZSkgPT4ge1xyXG5cdFx0XHRcdGlmIChlcnIpXHJcblx0XHRcdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoe21lc3NhZ2U6ICdFcnJvciB3aGVuIGxvb2tpbmcgZm9yIHByb2ZpbGUgd2l0aCB0aGUgaWQgb2YgJyArIHNlYXJjaElkICsgJyBhbmQgdGhlIHVwZGF0ZSBib2R5IG9mICcgKyByZXEuYm9keSwgb3JpZ2luYWxFcnJvcjogZXJyfSk7XHJcblx0XHRcdFxyXG5cdFx0XHRcdGlmKCFwcm9maWxlKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5zZW5kKHttZXNzYWdlOiAnVW5hYmxlIHRvIGxvY2F0ZSBwcm9maWxlIGFzc29jaWF0ZWQgd2l0aCB0aGUgaW5kaWNhdGVkIGlkOiAnICsgcmVxLnBhcmFtcy5pZH0pO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHByb2ZpbGUpO1xyXG5cdFx0XHRcdHJldHVybiByZXMuc2VuZChwcm9maWxlKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IHsgUHJvZmlsZXNDb250cm9sbGVyIH07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9