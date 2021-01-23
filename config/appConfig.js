let appConfig = {
  allowedCorsOrigin:"*",
  apiVersion: '/api/v1',
  development:{
    "url":"mongodb://localhost:27017/currency_converter",
    "port":"5000"
  },
  production:{
    "url":"mongodb://localhost:27017/currency_converter_prod",
    "port":"5001"
  }
};

module.exports = {
    allowedCorsOrigin: appConfig.allowedCorsOrigin,
    apiVersion : appConfig.apiVersion,
    development: appConfig.development,
    production: appConfig.production
};