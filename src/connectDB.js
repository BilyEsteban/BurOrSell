import mongoose from "mongoose";
import config from './config'

(async()=>{
    const connect = await mongoose.connect(config.mongoConnectDB);

    console.log('conected to DB: ', connect.connection.name)
})();
