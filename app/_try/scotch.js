var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/test");

var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    firstName: String,
    lastName: {type: String}
});

userSchema.methods.funnyName = function () {
    this.firstName = this.firstName + " -dudde";
    return this.name;
}

userSchema.pre('save', function (next) {
    this.updated_at = new Date();
    next();
});


var User = mongoose.model('User', userSchema);

var sasha = new User({
    firstName: 'Sasha',
    lastName: 'Solod'
});

sasha.funnyName(function (err, data) {
    if (err) throw err;
    console.log('Your name is ', name);
})


sasha.save(function (err, data) {
    if (err) throw err;
    console.log(data);
});

console.log('done');

