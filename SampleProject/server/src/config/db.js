const mongoose = require("mongoose");
const { db_url } = require("../sampleEnv");
module.exports = function () {
    console.log("ok --- " + db_url);
    mongoose.connect("mongodb+srv://rishabhsaklani391:QtOPGyH3yYTv3mjK@cluster0.n5fs6mt.mongodb.net/").then(console.log("DB Connected ")).catch((err) => {
        console.log("Error in connecting to db");
    })
}