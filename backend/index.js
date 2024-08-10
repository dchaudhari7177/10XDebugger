const express=require("express");
const cron = require("node-cron")
const app=express();
const rootRouter = require("./Routes/index");
const checkWeatherAndNotify = require("./notification");
app.use(express.json());
app.use("/api/v1", rootRouter);

cron.schedule('* * * * *',async ()=>{
    await checkWeatherAndNotify();
    console.log("checked");
})
app.listen(3000);