import { connect } from 'mongoose';

const connectDB = async () => {
  try {
    await connect('mongodb://birna123:admin123@codealpha-shard-00-00.3b0ww.mongodb.net:27017,codealpha-shard-00-01.3b0ww.mongodb.net:27017,codealpha-shard-00-02.3b0ww.mongodb.net:27017/UrlShortner?replicaSet=atlas-bi2kdu-shard-0&ssl=true&authSource=admin');
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
