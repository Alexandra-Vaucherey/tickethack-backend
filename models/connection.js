const mongoose = require("mongoose");

const concectionString =
  "mongodb+srv://azzopardivero:RYmBC9we2Ql9lWVq@veronique.o4ab8fn.mongodb.net/tickethack";
mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));
