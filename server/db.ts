import mongoose from "mongoose";

const db = "mongodb://localhost:27017/dev";

/**Connects server mongoDb */
export const connect = async () => {
  return await mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
