// Importa el cliente de la base de datos
import { client } from '../../database/database.js';

const getGame = async (req, res) => {
    try {
        const response = await client.query("SELECT game_id, cat_id, dev_id, game_name, game_date_release, game_code_unique, game_size, game_price FROM public.game");
        res.json(response.rows);
    } catch (err) {
        console.error('Error getting game', err);
        res.status(500).json({ error: 'An error occurred while getting game' });
    }
};

const getGameById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await client.query("SELECT game_id, cat_id, dev_id, game_name, game_date_release, game_code_unique, game_size, game_price FROM public.game WHERE game_id = $1", [id]);
        res.json(response.rows[0]);
    } catch (err) {
        console.error('Error getting game by id', err);
        res.status(500).json({ error: 'An error occurred while getting game by id' });
    }
};

const createGame = async (req, res) => {
    try {
        const { cat_id, dev_id, game_name, game_date_release, game_code_unique, game_size, game_price } = req.body;
        const response = await client.query(
            "INSERT INTO public.game (cat_id, dev_id, game_name, game_date_release, game_code_unique, game_size, game_price) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [cat_id, dev_id, game_name, game_date_release, game_code_unique, game_size, game_price]
        );
        const game_id = response.rows[0].game_id;
        res.json({
            message: "Game Added successfully",
            body: {
                game: {
                    game_id,
                    cat_id,
                    dev_id,
                    game_name,
                    game_date_release,
                    game_code_unique,
                    game_size,
                    game_price,
                },
            },
        });
    } catch (err) {
        console.error('Error creating game', err);
        res.status(500).json({ error: 'An error occurred while creating game' });
    }
};

const updateGame = async (req, res) => {
    try {
        const { game_id, cat_id, dev_id, game_name, game_date_release, game_code_unique, game_size, game_price } = req.body;
        const response = await client.query(
            "UPDATE public.game SET cat_id = $1, dev_id = $2, game_name = $3, game_date_release = $4, game_code_unique = $5, game_size = $6, game_price = $7 WHERE game_id = $8 RETURNING *",
            [cat_id, dev_id, game_name, game_date_release, game_code_unique, game_size, game_price, game_id]
        );
        res.json({
            message: "Game Updated successfully",
            body: {
                game: {
                    game_id,
                    cat_id,
                    dev_id,
                    game_name,
                    game_date_release,
                    game_code_unique,
                    game_size,
                    game_price,
                },
            },
        });
    } catch (err) {
        console.error('Error updating game', err);
        res.status(500).json({ error: 'An error occurred while updating game' });
    }
};

const deleteGame = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await client.query("DELETE FROM public.game WHERE game_id = $1 RETURNING *", [id]);

        if (response.rows.length === 0) {
            res.status(404).json({ error: 'Game not found' });
        } else {
            res.json({
                message: "Game deleted successfully",
                body: {
                    game: {
                        game_id: response.rows[0].game_id,
                        cat_id: response.rows[0].cat_id,
                        dev_id: response.rows[0].dev_id,
                        game_name: response.rows[0].game_name,
                        game_date_release: response.rows[0].game_date_release,
                        game_code_unique: response.rows[0].game_code_unique,
                        game_size: response.rows[0].game_size,
                        game_price: response.rows[0].game_price,
                    },
                },
            });
        }
    } catch (err) {
        console.error('Error deleting game', err);
        res.status(500).json({ error: 'An error occurred while deleting game' });
    }
};

export {
    getGame,
    getGameById,
    createGame,
    updateGame,
    deleteGame,
};
