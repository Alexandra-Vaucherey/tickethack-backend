const mongoose = require("mongoose");
const concectionString =
  "mongodb+srv://azzopardivero:RYmBC9we2Ql9lWVq@veronique.o4ab8fn.mongodb.net/tickethack";
const tripSchema = mongoose.Schema({
  departure: String,
  arrival: String,
  date: Date,
  price: Number,
});

const Trip = mongoose.model("trips", tripSchema);
module.exports = Trip;
