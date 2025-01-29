const express = require("express");
const app = express()

app.use(express.json());
app.use(express.json({ extended: false }));

//app.use("/product", require("./Router/ProductRoute"))
app.use("/order", require("./Router/OrderRoute"))

const port = 7000;
app.listen(port, ()=>{
    console.log("express Server is up")
})
