import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import axios from 'axios';

dotenv.config();
 const app = express()
const port = process.env.PORT;
 app.listen(port, ()=>{
  console.log(`Server running on PORT ${port}`)

 })