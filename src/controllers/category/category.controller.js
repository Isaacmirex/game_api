// Importa el cliente de la base de datos
import { client } from '../../database/database.js';
const getCategory = async (req, res) => {
    try {
        const response = await client.query("SELECT cat_id, cat_name FROM public.category");
        res.json(response.rows);
    } catch (err) {
        console.error('Error getting category', err);
        res.status(500).json({ error: 'An error occurred while getting category' });
    }
};

const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await client.query("SELECT cat_id, cat_name FROM public.category WHERE cat_id = $1", [id]);
        res.json(response.rows[0]);
    } catch (err) {
        console.error('Error getting category by id', err);
        res.status(500).json({ error: 'An error occurred while getting category by id' });
    }
};

const createCategory = async (req, res) => {
    try {
        const { cat_name } = req.body;
        const response = await client.query(
            "INSERT INTO public.category (cat_name) VALUES ($1) RETURNING *",
            [cat_name]
        );
        const cat_id = response.rows[0].cat_id;
        res.json({
            message: "Category Added successfully",
            body: {
                category: {
                    cat_id,
                    cat_name,
                },
            },
        });
    } catch (err) {
        console.error('Error creating category', err);
        res.status(500).json({ error: 'An error occurred while creating category' });
    }
};

const updateCategory = async (req, res) => {
    try {
        const { cat_id, cat_name } = req.body;
        const response = await client.query(
            "UPDATE public.category SET cat_name = $1 WHERE cat_id = $2 RETURNING *",
            [cat_name, cat_id]
        );
        res.json({
            message: "Category Updated successfully",
            body: {
                category: {
                    cat_id,
                    cat_name,
                },
            },
        });
    } catch (err) {
        console.error('Error updating category', err);
        res.status(500).json({ error: 'An error occurred while updating category' });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await client.query("DELETE FROM public.category WHERE cat_id = $1 RETURNING *", [id]);

        if (response.rows.length === 0) {
            res.status(404).json({ error: 'Category not found' });
        } else {
            res.json({
                message: "Category deleted successfully",
                body: {
                    category: {
                        cat_id: response.rows[0].cat_id,
                        cat_name: response.rows[0].cat_name,
                    },
                },
            });
        }
    } catch (err) {
        console.error('Error deleting category', err);
        res.status(500).json({ error: 'An error occurred while deleting category' });
    }
};
export {
    getCategory,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
};