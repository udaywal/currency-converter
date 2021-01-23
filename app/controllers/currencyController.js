const Currency = require('../models/Currency');

createCurrency = async (req, res) => {

    try {

        console.log(req.params);

        let currencyData = new Currency({
            name: req.params.name,
            symbol: req.params.symbol.toUpperCase(),
        })
        const savedCurrency = await currencyData.save()
        return res.send({ status: 200, message: "Currency added", data: savedCurrency })
        
    } catch (error) {
        console.log(error);
        return res.send({ status: 500, message: "Something went wrong", data: error })
    }
    
}

getCurrencies = async (req, res) => {
    
    try {
        
        let currencies = await Currency.find()
        return res.send({ status: 200, message: "Currencies fetched", data: currencies })
        
    } catch (error) {
        return res.send({ status: 500, message: "Something went wrong", data:error })
    }

}

module.exports = {
    createCurrency,
    getCurrencies
}