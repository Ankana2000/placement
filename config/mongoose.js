//require library
const mongoose = require('mongoose');

<<<<<<< HEAD
=======

>>>>>>> fcf551f69c8333dd0537ba482c83112a078d4da9
//connect to database
async function main() {
    const db = await mongoose.connect('mongodb+srv://ankumis2000:anku3421@cluster0.ahewrlp.mongodb.net/?retryWrites=true&w=majority')
    module.exports = db;
}

main()
.then(() => console.log('MongoDB Connected...')) //if connected
<<<<<<< HEAD
.catch(err => console.log(err)); //if error
=======
.catch(err => console.log(err)); //if error
>>>>>>> fcf551f69c8333dd0537ba482c83112a078d4da9
