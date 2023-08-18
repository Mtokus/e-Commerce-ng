const mongoose = require ("mongoose");
const uri = "mongodb+srv://mtokuus93:jvyLgJqiFgRFMVns@e-commercedb.faroocj.mongodb.net/?retryWrites=true&w=majority";


const connection = () => { 
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> console.log ("Mongodb bağlantısı başarılı"))
    .catch((err)=> console.log("Bağlantı hatası!Hata : " + err.message));

}

module.exports = connection; 