/// <reference path="../typings/main.d.ts" />
"use strict";
var express = require('express');
var helmet = require('helmet');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var routes_1 = require('./config/routes');
var port = 9876;
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
routes_1.routes(app);
mongoose.connect('mongodb://localhost/mongoose-example');
mongoose.connection.once('open', function () {
    console.log('now connected to db mongoose-example at mongodb://localhost:27017');
});
app.listen(port, function () {
    console.log('Express app running at http://localhost:%s', port);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2Q0FBNkM7O0FBRTdDLElBQU8sT0FBTyxXQUFXLFNBQVMsQ0FBQyxDQUFDO0FBQ3BDLElBQU8sTUFBTSxXQUFXLFFBQVEsQ0FBQyxDQUFDO0FBQ2xDLElBQU8sUUFBUSxXQUFXLFVBQVUsQ0FBQyxDQUFDO0FBQ3RDLElBQU8sVUFBVSxXQUFXLGFBQWEsQ0FBQyxDQUFDO0FBRTNDLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBRXpDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNoQixJQUFJLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztBQUVwQixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzNCLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBRWxCLGVBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUVaLFFBQVEsQ0FBQyxPQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQztBQUN6RCxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7SUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDO0FBQ2xGLENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNqRSxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9tYWluLmQudHNcIiAvPlxyXG5cclxuaW1wb3J0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcbmltcG9ydCBoZWxtZXQgPSByZXF1aXJlKCdoZWxtZXQnKTtcclxuaW1wb3J0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcclxuaW1wb3J0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xyXG5cclxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9jb25maWcvcm91dGVzJztcclxuXHJcbmxldCBwb3J0ID0gOTg3NjtcclxubGV0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7ZXh0ZW5kZWQ6IHRydWV9KSk7XHJcbmFwcC51c2UoaGVsbWV0KCkpO1xyXG5cclxucm91dGVzKGFwcCk7XHJcblxyXG5tb25nb29zZS5jb25uZWN0KCdtb25nb2RiOi8vbG9jYWxob3N0L21vbmdvb3NlLWV4YW1wbGUnKTtcclxubW9uZ29vc2UuY29ubmVjdGlvbi5vbmNlKCdvcGVuJywgKCkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKCdub3cgY29ubmVjdGVkIHRvIGRiIG1vbmdvb3NlLWV4YW1wbGUgYXQgbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNycpO1xyXG59KTtcclxuXHJcbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKCdFeHByZXNzIGFwcCBydW5uaW5nIGF0IGh0dHA6Ly9sb2NhbGhvc3Q6JXMnLCBwb3J0KTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9