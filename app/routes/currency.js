const currencyController = require('../controllers/currencyController');
const appConfig = require('../../config/appConfig')
const baseUrl = `${appConfig.apiVersion}`;

module.exports = function (app) {

    app.get(`${baseUrl}/currency/create/:name/:symbol`, currencyController.createCurrency);
    app.get(`${baseUrl}/currency/list`, currencyController.getCurrencies);

}