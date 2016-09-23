
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  name: {type:String, required:true},
  password: {type:String, required:true}//replace example as desired
})

var QuestionSchema = new mongoose.Schema({
	question: {type:String, required:true},
	description: {type:String},
	name: {type:String, required:true},
	answers: [{
		answer: {type:String, required:true},
		details: {type:String},
		name: {type:String, required:true},
		likes: {type: Number, default: 0 },
	}],
	created_at: {type: Date, default: Date.now },
});
mongoose.model('user', userSchema);
mongoose.model('question', QuestionSchema);
