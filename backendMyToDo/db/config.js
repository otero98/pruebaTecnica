const mongoose = require("mongoose");
const dbConnection = async () => {
    mongoose.set("strictQuery", false);

    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            
        })

        console.log("BD conectada");

    } catch (error) {
        console.log(error);
        throw new Error("Error en la conexion de la bd");

    }
}


module.exports = {dbConnection};