let appConfig = {
  allowedCorsOrigin:"*",
  apiVersion: '/api/v1',
  development:{
    "url":"mongodb://localhost:27017/currency_converter",
    "port":"5000"
  },
  production:{
    "url":"mongodb+srv://udaywal:k1H7qQfYwg0huzqg@cluster0.fri9n.mongodb.net/currency_converter?retryWrites=true&w=majority",
    "port":"5001"
  }
};

module.exports = {
    allowedCorsOrigin: appConfig.allowedCorsOrigin,
    apiVersion : appConfig.apiVersion,
    development: appConfig.development,
    production: appConfig.production
};