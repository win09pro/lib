var mongoose = require('mongoose');
import bcrypt from 'bcrypt';
const SALT_WORK_FACTOR = 10;

var userSchema = new mongoose.Schema({ 
 username: {
    type: String,
    required: true,
    unique: true   
  },
  password: {
    type: String,
    required: true
  },
  name:{
  	first:String,
  	last:String
  },
  barcode:String,
  type:{
  	type:Number,
  	default:3
  },
  avatar: String  
});

userSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});
userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};
module.exports = mongoose.model('User', userSchema);