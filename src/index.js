import express from "express";
import mongoose from "mongoose";
import { connect } from "./database/connect.js";
import { serverRouter } from "./router/server.router.js";


const app= express();
const port = 8000;

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.use(serverRouter);



connect().then(()=>{
    console.log('Database connected');
    app.listen(port,()=>{
        console.log(`server running on ${port} port`)

})


}).catch((err)=>{
    console.log("Database not connected");
})

