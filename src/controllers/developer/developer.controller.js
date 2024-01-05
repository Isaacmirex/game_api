// Importa el cliente de la base de datos
import { client } from '../../database/database.js';

const getDeveloper = async (req, res) => {
    try {
        const response = await client.query("SELECT dev_id, dev_name, dev_country, dev_unique_code FROM public.developer");
        res.json(response.rows);
    } catch (err) {
        console.error('Error getting developer', err);
        res.status(500).json({ error: 'An error occurred while getting developer' });
    }
};

const getDeveloperById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await client.query("SELECT dev_id, dev_name, dev_country, dev_unique_code FROM public.developer WHERE dev_id = $1", [id]);
        res.json(response.rows[0]);
    } catch (err) {
        console.error('Error getting developer by id', err);
        res.status(500).json({ error: 'An error occurred while getting developer by id' });
    }
};

const createDeveloper = async (req, res) => {
    try {
        const { dev_name, dev_country, dev_unique_code } = req.body;
        const response = await client.query(
            "INSERT INTO public.developer (dev_name, dev_country, dev_unique_code) VALUES ($1, $2, $3) RETURNING *",
            [dev_name, dev_country, dev_unique_code]
        );
        const dev_id = response.rows[0].dev_id;
        res.json({
            message: "Developer Added successfully",
            body: {
                developer: {
                    dev_id,
                    dev_name,
                    dev_country,
                    dev_unique_code,
                },
            },
        });
    } catch (err) {
        console.error('Error creating developer', err);
        res.status(500).json({ error: 'An error occurred while creating developer' });
    }
};

const updateDeveloper = async (req, res) => {
    try {
        const { dev_id, dev_name, dev_country, dev_unique_code } = req.body;
        const response = await client.query(
            "UPDATE public.developer SET dev_name = $1, dev_country = $2, dev_unique_code = $3 WHERE dev_id = $4 RETURNING *",
            [dev_name, dev_country, dev_unique_code, dev_id]
        );
        res.json({
            message: "Developer Updated successfully",
            body: {
                developer: {
                    dev_id,
                    dev_name,
                    dev_country,
                    dev_unique_code,
                },
            },
        });
    } catch (err) {
        console.error('Error updating developer', err);
        res.status(500).json({ error: 'An error occurred while updating developer' });
    }
};

const deleteDeveloper = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await client.query("DELETE FROM public.developer WHERE dev_id = $1 RETURNING *", [id]);

        if (response.rows.length === 0) {
            res.status(404).json({ error: 'Developer not found' });
        } else {
            res.json({
                message: "Developer deleted successfully",
                body: {
                    developer: {
                        dev_id: response.rows[0].dev_id,
                        dev_name: response.rows[0].dev_name,
                        dev_country: response.rows[0].dev_country,
                        dev_unique_code: response.rows[0].dev_unique_code,
                    },
                },
            });
        }
    } catch (err) {
        console.error('Error deleting developer', err);
        res.status(500).json({ error: 'An error occurred while deleting developer' });
    }
};

export {
    getDeveloper,
    getDeveloperById,
    createDeveloper,
    updateDeveloper,
    deleteDeveloper,
};
