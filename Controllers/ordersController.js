import pool from "../Database/pool.js";

export const getOrders = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM orders');
        res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal Server Error');
    }
};

export const getOrderById = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await pool.query('SELECT * FROM orders WHERE id = $1', [id]);
        res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal Server Error');
    }
};

export const createOrder = async (req, res) => {
    const {price, date, user_id} = req.body;
    try {
        const response = await pool.query('INSERT INTO orders (price, date, user_id) VALUES ($1, $2, $3)', [price, date, user_id]);
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal Server Error');
    }
};

export const updateOrder = async (req, res) => {
    const id = req.params.id;
    const {price, date, user_id} = req.body;
    try {
        const response = await pool.query('UPDATE orders SET price = $1, date = $2, user_id = $3 WHERE id = $4', [price, date, user_id, id]);
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal Server Error');
    }
}


export const deleteOrder = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await pool.query('DELETE FROM orders WHERE id = $1', [id]);
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal Server Error');
    }
};