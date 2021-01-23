/**  Module Dependencies **/
const mongoose = require('mongoose');

const currencySchema = new mongoose.Schema({

  name: { type: String },
  symbol: { type: String },

}, { timestamps: true })

module.exports = mongoose.model('Currency', currencySchema);