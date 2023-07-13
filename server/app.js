const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const app = express();
const errorHandler = require("./middlewares/error");

// import routes
const userRouter = require('./routes/user.route');

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB connected'))
    .catch((error) => console.log(error));

// middlewares
app.use(morgan('dev'));
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.json());

app.use('/user', userRouter);

app.use(errorHandler);

const port = process.env.PORT || 2001;
app.listen(port, () => {
    console.log('server is lisitning')
});
