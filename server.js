const express = require('express');
const cors = require('cors');

const app = express();

var corOptions = {
  origin: 'https://localhost:8081',
};

//middleware

app.use(cors(corOptions));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

//routers

const productRouter = require('./routes/productRouter.js');
const reviewRouter = require('./routes/reviewRouter.js');

app.use('/api/products', productRouter);
app.use('/api/reviews', reviewRouter);

//testing api

app.get('/', (req, res) => {
  res.json({ message: 'Hello from API' });
});

//port

const PORT = process.env.PORT || 8080;

//server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
