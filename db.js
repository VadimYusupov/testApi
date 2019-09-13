const MongoClient = require('mongodb').MongoClient;

const state = {
  db: null,
};

exports.connect = (url, done) => {
  if (state.db) {
    return done();
  }

  const dbName = 'testdb';
  MongoClient.connect(url, (err, client) => {
    if (err) {
      return done(err);
    }
    state.db = client.db(dbName);
    done();
  });
};

exports.get = () => {
  return state.db
};
