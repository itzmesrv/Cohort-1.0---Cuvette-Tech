// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const notes = require("./data/notes");
// const userRoutes = require('./routes/userRoutes');
// const { notFound, errorHandler } = require("./middlewares/errorMiddleware");


// const app = express();
// dotenv.config();
// app.use(express.json()); 

// mongoose.connect(process.env.MONGODB_URL).then(() => {
//     console.log("Connected to mongo db server");
// }).catch(err => {
//     console.log("Error connecting to database" + err)
// });



// // app.use('/api/users/login', userRoutes)

// app.get("/hello-world", (req,res) => {
//     res.send("Hello World")
// })

//   app.get("/api/notes",(req,res)=>{
//       res.json(notes)
//   })

//  app.use("/api/users", userRoutes)
// //  app.use("/api/users/login", userRoutes)

// app.use(notFound)
// app.use(errorHandler)


// app.listen(process.env.PORT, () => { 
//     console.log("Backend server has started at " + process.env.PORT);
// });

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/auth");
const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Mongo running");
  })
  .catch((err) => {
    console.log("error occured" + err);
  });

app.get("/hello-world", (req, res) => {
  res.send("hello world");
});

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log("backend running at" + process.env.PORT);
});