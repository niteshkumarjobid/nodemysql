import pool from '../config/db';

export const getArticles = async () => {
  const [rows] = await pool.query('SELECT * FROM articles ORDER BY id DESC');
  return rows;
};

export const getArticleById = async (id: number) => {
  const [rows]: any = await pool.query(
    'SELECT * FROM articles WHERE id = ?',
    [id]
  );

  return rows[0];
};