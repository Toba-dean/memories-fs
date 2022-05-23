require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

const connectDB = require('./db/connect');
const postRoutes = require('./routes/postRoutes')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// ROUTES
app.use('/api/v1', postRoutes)


const start = async () => { 
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening at: ${PORT}`);
    }) 
  } catch (error) { 
    console.log(error.message); 
  }
}   
      
start()


// app.listen(PORT, () => {
//   console.log(`Server is listening at: ${PORT}`);
// }) 

