import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new pg.Pool(
    {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
        port: 5432,
    }
);

export default pool;