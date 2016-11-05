var users = {
  'azat': {
    email: 'hi@azat.co',
    website: ' http://azat.co ',
    blog: ' http://webapplog.com '
  }
};

var findUserByUsername = function (username, callback) {
  // Perform database query that calls callback when it's done
  // This is our fake database
  if (!users[username])
    return callback(new Error(
      'No user matching '
       + username
      )
    );
  return callback(null, users[username]);
};

app.get('/v1/users/:username', function(request, response, next) {
  var username = request.params.username;
  findUserByUsername(username, function(error, user) {
    if (error) return next(error);
    return response.render('user', user);
  });
});

app.get('/v1/admin/:username', function(request, response, next) {
  var username = request.params.username;
  findUserByUsername(username, function(error, user) {
    if (error) return next(error);
    return response.render('admin', user);
  });
}); 
