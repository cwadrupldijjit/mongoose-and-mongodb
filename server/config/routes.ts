import express = require('express');
import { ProfilesController } from '../controllers/Profile';

function routes(app: express.Express) {
	app.use('/app/', express.static('../../public/'));
	
	app.get('/profiles/abc', ProfilesController.getAll_abc);
	app.get('/profiles/cba', ProfilesController.getAll_abcOpposite);
	app.get('/profiles/:id', ProfilesController.getOne);
	app.put('/profiles/:id', ProfilesController.update);
	app.post('/profiles', ProfilesController.create);
}

export { routes };