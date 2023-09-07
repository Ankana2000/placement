const mongoose = require('mongoose');

const DB = 'mongodb+srv://ankanamishra5:nd1dOBB9DpyynqXe@cluster0.ogxgujn.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	  tls: true, // Enable TLS/SSL
           tlsCAFile: 'path/to/ca.pem', // Path to the CA certificate file
           tlsCertificateKeyFile: 'path/to/client.pem',
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
	console.log('Connected to Database :: Mongodb');
});

module.exports = mongoose;
