//require library
const mongoose = require('mongoose');

<<<<<<< HEAD
//connect to database
async function main() {
    const db = await mongoose.connect('mongodb+srv://ankanamishra5:Ankana12356@cluster0.ogxgujn.mongodb.net/?retryWrites=true&w=majority')
    module.exports = db;
}

main()
.then(() => console.log('MongoDB Connected...')) //if connected
.catch(err => console.log(err)); //if error
=======
const DB = 'mongodb+srv://ankanamishra5:nd1dOBB9DpyynqXe@cluster0.ogxgujn.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
	console.log('Connected to Database :: Mongodb');
});

module.exports = mongoose;
>>>>>>> f12d6707034de6117cba085cf4b6f7139ec93fde
