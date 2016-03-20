var mongoose = require('mongoose');

const    SALT_WORK_FACTOR = 10;
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
  } 
});

// userSchema.methods.comparePassword = function(candidatePassword, cb) {
//     bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//         if (err) return cb(err);
//         cb(null, isMatch);
//     });
// };
module.exports = mongoose.model('User', userSchema);