const mongoose = reqiure('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/socNetworkDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = mongoose.connection;


// might have to reformat - still not 100% sure on formatting with NoSQL yet