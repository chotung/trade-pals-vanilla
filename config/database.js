const { DB_USERNAME, DB_PASSWORD, DB_CLUSTER } = require("./config");

module.exports = {
  MongoURI: `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ds253418.mlab.com:53418/trade_pals_db`
};
// I DON'T HAVE A CLUSTER

// update the mongoURI
// `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}.mongodb.net/test?retryWrites=true&w=majority`;