import mongoose from "mongoose";

export const dbConnection = () => {
  const MONGO_URI ="mongodb://localhost:27017/restaurent-data"
  mongoose
    .connect(MONGO_URI, {
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
