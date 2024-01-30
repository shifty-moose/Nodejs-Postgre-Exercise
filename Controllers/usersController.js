import pool from "../Database/pool.js";

export const getUsers = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM users');
        res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal Server Error');
    }
};

export const getUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal Server Error');
    }
};

export const createUser = async (req, res) => {
    const {first_name, last_name, age} = req.body;
    try {
        const response = await pool.query('INSERT INTO users (first_name, last_name, age) VALUES ($1, $2, $3)', [first_name, last_name, age]);
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal Server Error');
    }
};

export const updateUser = async (req, res) => {
    const id = req.params.id;
    const {first_name, last_name, age} = req.body;
    try {
        const response = await pool.query('UPDATE users SET first_name = $1, last_name = $2, age = $3 WHERE id = $4', [first_name, last_name, age, id]);
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal Server Error');
    }
};

export const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal Server Error');
    }
};