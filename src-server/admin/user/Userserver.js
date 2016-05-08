
var User = require('../../../models/User');
var bcrypt =require('bcrypt');
const SALT_WORK_FACTOR = 10;
function Userserver(app) {
 
/**USER**/
/**
 * POST /api/user
 * Adds new user to the database.
 */

app.post('/api/user', function(req, res, next) {
  var userID = req.body.id;
  var userName = req.body.userName;
  var password = req.body.password;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var barcode = req.body.barcode;
  var type = req.body.type;
  var avatar = req.body.avatar;

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password along with our new salt
        bcrypt.hash(password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            password = hash;
               User.findOne({ _id: userID }, function(err, user) {
  if ( (err)|| (!user) )
  {
    User.findOne({username:userName}, function(err1, alreadyUser)
    {
        if((err1)||(!alreadyUser))
        {
          try{
         var user = new User({
                    username:userName,
                    password:password,
                    name:{first:firstName,last:lastName} ,
                    barcode:barcode,
                    type:type,
                    avatar:avatar
                  });
         user.save(function(err) {
         if (err) return next(err);
         res.send({ message: userName + ' has been added successfully!' });
         });
         } catch (e) {
            res.status(e).send({ message: userName + ' error when add new user' });
        }
        }
        else
        {
           res.send({ message: userName + ' đã có trong hệ thống, thử tên khác' });
        }
    })
  }
  else
  {
        user.update({ $set: {
                    username: userName ,
                    password:password,
                    name:{first:firstName,last:lastName} ,
                    barcode:barcode,
                    type:type,
                    avatar:avatar
        } }, function(err) {
            if (err) return next(err);
            res.send({ message: userName + ' has been updated successfully!' });
          });
        }})           
      });
    });
   });

/**
 * GET /api/checkusername
 * Get a user from the database.
 */
  app.post('/api/checkusername', function(req, res, next) {
  var userName = req.body.userName; 
  User.findOne({ username: userName }, function(err, user) {
    if (err) return next(err);
    if (!user) {
      return res.status(404).send({ message: 'Tên truy cập có thể sử dụng' });
    }
    res.send({ message: userName + ' đã tồn tại' });
  });
});
/**
 * GET /api/user/:id
 * Get a user from the database.
 */
  app.get('/api/user/:id', function(req, res, next) {
  var id = req.params.id;
  User.findOne({ _id: id }, function(err, user) {
    if (err) return next(err);

    if (!user) {
      return res.status(404).send({ message: 'User not found.' });
    }
    res.send(user);
  });
});

/**
 * POST /api/deleteuser
 * Delete a User from the database.
 */
app.post('/api/deleteuser', function(req, res, next) {
  var userId = req.body.id;
  User.remove({name:''})  ;
  User.findOne({ _id: userId }, function(err, user) {
    if (err) return next(err);

    if (!user) {
      return res.status(404).send({ message: 'user not found.' });
    }
      user.remove();
      res.send({ message: user.userName + ' has been deleted.' });


  });
});


/**
 * GET /api/user
 * Return users from the database.
 */

app.get('/api/user', function(req, res, next) {
  try{
   User
   .find()
   .exec(function(err,users){
    if(err) next(err);
    res.send(users);
   })
      } catch (e) {
      res.status(e);
          }
        });
app.post('/api/login/user',function(req,res,next) {
  var username = req.body.username;
  var password = req.body.password;
  User.findOne({ username: username }, function(err, user) {
    if (err) return next(err);

    if (!user) {
      return res.status(404).send({ message: 'User not found.' });
    }
    bcrypt.compare(password, user.password, function(err, isMatch)
      {
         if (err) return next(err);
         if(!isMatch)
         {
          res.status(400).send({ message: 'User not found.' });
         }
         else
         {
         res.send(user);
        }
      });
   
  });
});

}
module.exports = Userserver;
