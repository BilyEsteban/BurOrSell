import { config } from "dotenv";
config()

export default {
    mongoConnectDB : process.env.MONGO_DATABASE
}