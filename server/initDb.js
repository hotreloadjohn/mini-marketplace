import db from "./config/database.js";

// import Users from "./models/UserModel.js";
// import Product from "./models/ProductModel.js";

db.sync({ force: true })
  // .sync()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
