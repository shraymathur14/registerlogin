// modules
const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const router = require('./routes/userRoute');
const cors = require('cors');
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// database connection
// mongodb+srv://gamingwork:Moatlas@cluster0.9bc5cxy.mongodb.net/userdata?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://gamingwork:Moatlas@cluster0.9bc5cxy.mongodb.net/userdata?retryWrites=true&w=majority')
    .then((accepted) => {
        app.listen(59703, () => {
            console.log(`Server is listening on port http://localhost:59703/`);
        });
        console.log(`Database connected successfully`);
    })
    .catch((rejected) => {
        console.log("Failed to connect to database");
    });

// route
app.use(router);


