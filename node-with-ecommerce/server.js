import dotenv from "dotenv";
import { connection } from "./src/db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./.env",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected Database Sucessfully");

  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running at port : ${process.env.PORT}`);
  });

  app.on("error", (err) => {
    console.log("Error:", err);
    throw err;
  });
});

// connection
//   .connect()
//   .then(async () => {
//     console.log("mysql Connection SUCCESS!!!");
//     await setupTables();

//     app.listen(process.env.PORT || 8000, () => {
//       console.log(`Server is running at port : ${process.env.PORT}`);
//     });

//     app.on("error", (err) => {
//       console.log("Error:", err);
//       throw err;
//     });
//   })
//   .catch((err) => {
//     console.log("mysql Connection FAILED!!:", err);
//   });
