import express from 'express';
import orderRoutes from './Routes/orderRoutes.js';
import userRoutes from './Routes/userRoutes.js';
import dotenv from 'dotenv';

const app = express();
const port = 3000;

app.use(express.json());
dotenv.config();

app.use('/orders', orderRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
