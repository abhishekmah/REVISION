const express = require('express')
const cors = require("cors");
const connect = require("./Config/db")

const app = express();
app.use(cors());
app.use(express.json());

const studentController = require("./controllers/student.controller")

  app.use("/students", studentController);

app.listen(2345, async () => {
    await connect()
    console.log('listening to port no 2345');
})