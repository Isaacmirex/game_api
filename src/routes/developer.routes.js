import { Router } from 'express';
const router_developer = Router();
import {
    getDeveloper,
    getDeveloperById,
    createDeveloper,
    updateDeveloper,
    deleteDeveloper
} from '../controllers/developer/developer.controller.js';
/**
 * @openapi
 * /v1/developer:
 *   get:
 *     tags:
 *       - Developer
 *     summary: Get a list of developers
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
 *                       dev_id:
 *                         type: integer
 *                         example: 2
 *                         description: The ID of the developer
 *                       dev_name:
 *                         type: string
 *                         example: EPIC2
 *                         description: The name of the developer
 *                       dev_country:
 *                         type: string
 *                         example: ESTADOS UNIDOS
 *                         description: The country of the developer
 *                       dev_unique_code:
 *                         type: string
 *                         example: 1234554f23s
 *                         description: The unique code of the developer
 * 
 *   post:
 *     tags:
 *       - Developer
 *     summary: Create a new developer
 *     requestBody:
 *       description: JSON object containing developer data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               dev_id:
 *                 type: integer
 *                 example: 2
 *                 description: The ID of the developer
 *               dev_name:
 *                 type: string
 *                 example: EPIC2
 *                 description: The name of the developer
 *               dev_country:
 *                 type: string
 *                 example: ESTADOS UNIDOS
 *                 description: The country of the developer
 *               dev_unique_code:
 *                 type: string
 *                 example: 1234554f23s
 *                 description: The unique code of the developer
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
 *       - Developer
 *     summary: Update an existing developer
 *     requestBody:
 *       description: Developer data to update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               dev_id:
 *                 type: integer
 *                 example: 2
 *                 description: The ID of the developer to update
 *               dev_name:
 *                 type: string
 *                 example: New Developer Name
 *                 description: The updated name of the developer
 *               dev_country:
 *                 type: string
 *                 example: NEW COUNTRY
 *                 description: The updated country of the developer
 *               dev_unique_code:
 *                 type: string
 *                 example: new1234554f23s
 *                 description: The updated unique code of the developer
 *             required:
 *               - dev_id
 *               - dev_name
 *               - dev_country
 *               - dev_unique_code
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
 *                     dev_id:
 *                       type: integer
 *                       example: 2
 *                     dev_name:
 *                       type: string
 *                       example: New Developer Name
 *                     dev_country:
 *                       type: string
 *                       example: NEW COUNTRY
 *                     dev_unique_code:
 *                       type: string
 *                       example: new1234554f23s
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
 *                   example: Developer not found
 * 
 * /v1/developer/{id}:
 *   get:
 *     tags:
 *       - Developer
 *     summary: Get a developer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the developer to retrieve
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
 *                     dev_id:
 *                       type: integer
 *                       example: 2
 *                       description: The ID of the developer
 *                     dev_name:
 *                       type: string
 *                       example: EPIC2
 *                       description: The name of the developer
 *                     dev_country:
 *                       type: string
 *                       example: ESTADOS UNIDOS
 *                       description: The country of the developer
 *                     dev_unique_code:
 *                       type: string
 *                       example: 1234554f23s
 *                       description: The unique code of the developer
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
 *                   example: Developer not found
 * 
 *   delete:
 *     tags:
 *       - Developer
 *     summary: Delete a developer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the developer to delete
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
 *                   example: Developer not found
 */
router_developer.get('/v1/developer', getDeveloper);
router_developer.get('/v1/developer/:id', getDeveloperById);
router_developer.post('/v1/developer', createDeveloper);
router_developer.put('/v1/developer', updateDeveloper);
router_developer.delete('/v1/developer/:id', deleteDeveloper);
export { router_developer };
