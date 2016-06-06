var express             = require('express'),
    usersRouter         = express.Router(),
    passport            = require('../../lib/passportStrategy.js'),
    User                = require('../../models/user.js'),
    jwt                 = require('jsonwebtoken');


// Create a new user
usersRouter.post('/', function(req, res, next) {

  User.create(req.body.user, function( err, dbUser ) {
    if (err) { res.status(500).end() }

    var jtoken = jwt.sign( dbUser.username, process.env.JWT_SECRET, { expiresInMinutes: 1440 } );
    res.json( { user: dbUser,
                token: jtoken
              });
  });
});

usersRouter.use(passport.authenticate('jwt', { session: false}));

// GET all users
usersRouter.get('/', function(req, res, next) {
  User.find(function( err, dbUsers ){
    res.json( dbUsers );
  });
});

// usersRouter.get('/currentuser', function(req, res, next) {
//   res.json( req.user );
// });

// usersRouter.put("/updateaccount", function(req, res){
//   console.log(req.user)
//   req.user.weight = data.weight
//   console.log(req.user)
// });
  //update req.user
  //send back whatever res code makes sense to you

module.exports = usersRouter;
