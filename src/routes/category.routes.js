import { Router } from "express";
const router_category = Router();
import {
    getCategory,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
} from '../controllers/category/category.controller.js';
/**
 * @openapi
 * /v1/category:
 *   get:
 *     tags:
 *       - Category
 *     summary: Get a list of categories
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       cat_id:
 *                         type: integer
 *                         example: 1
 *                         description: The ID of the category
 *                       cat_name:
 *                         type: string
 *                         example: Terror
 *                         description: The name of the category
 * 
 *   post:
 *     tags:
 *       - Category
 *     summary: Create a new category
 *     requestBody:
 *       description: JSON object containing category data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cat_id:
 *                 type: integer
 *                 example: 1
 *                 description: The ID of the category
 *               cat_name:
 *                 type: string
 *                 example: Terror
 *                 description: The name of the category
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object
 *                   properties:
 *                     // Define properties of the response data if any
 * 
 *   put:
 *     tags:
 *       - Category
 *     summary: Update an existing category
 *     requestBody:
 *       description: Category data to update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cat_id:
 *                 type: integer
 *                 example: 1
 *                 description: The ID of the category to update
 *               cat_name:
 *                 type: string
 *                 example: New Category Name
 *                 description: The updated name of the category
 *             required:
 *               - cat_id
 *               - cat_name
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object
 *                   properties:
 *                     cat_id:
 *                       type: integer
 *                       example: 1
 *                     cat_name:
 *                       type: string
 *                       example: New Category Name
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Not Found
 *                 error:
 *                   type: string
 *                   example: Category not found
 * /v1/category/{id}:
 *   get:
 *     tags:
 *       - Category
 *     summary: Get a category by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the category to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object
 *                   properties:
 *                     cat_id:
 *                       type: integer
 *                       example: 1
 *                       description: The ID of the category
 *                     cat_name:
 *                       type: string
 *                       example: Terror
 *                       description: The name of the category
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Not Found
 *                 error:
 *                   type: string
 *                   example: Category not found
 * 
 *   delete:
 *     tags:
 *       - Category
 *     summary: Delete a category by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the category to delete
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object
 *                   properties:
 *                     // Define properties of the response data if any
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: Not Found
 *                 error:
 *                   type: string
 *                   example: Category not found
 */

 
router_category.get('/v1/category', getCategory);
router_category.get('/v1/category/:id', getCategoryById);
router_category.post('/v1/category', createCategory);
router_category.put('/v1/category', updateCategory);
router_category.delete('/v1/category/:id', deleteCategory);
export { router_category};