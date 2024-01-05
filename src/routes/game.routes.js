import { Router } from "express";
const router_game = Router();
import {
    getGame,
    getGameById,
    createGame,
    updateGame,
    deleteGame
} from '../controllers/game/game.controller.js';
/**
 * @openapi
 * /v1/game:
 *   get:
 *     tags:
 *       - Game
 *     summary: Get a list of games
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
 *                       game_id:
 *                         type: integer
 *                         example: 1
 *                         description: The ID of the game
 *                       cat_id:
 *                         type: integer
 *                         example: 1
 *                         description: The ID of the category associated with the game
 *                       dev_id:
 *                         type: integer
 *                         example: 1
 *                         description: The ID of the developer associated with the game
 *                       game_name:
 *                         type: string
 *                         example: FORNITE
 *                         description: The name of the game
 *                       game_date_release:
 *                         type: string
 *                         format: date-time
 *                         example: 2022-10-01T05:00:00.000Z
 *                         description: The release date of the game
 *                       game_code_unique:
 *                         type: string
 *                         example: SDSK#\"434
 *                         description: The unique code of the game
 *                       game_size:
 *                         type: string
 *                         example: 10.2
 *                         description: The size of the game
 *                       game_price:
 *                         type: string
 *                         example: 200
 *                         description: The price of the game
 * 
 *   post:
 *     tags:
 *       - Game
 *     summary: Create a new game
 *     requestBody:
 *       description: JSON object containing game data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               game_id:
 *                 type: integer
 *                 example: 1
 *                 description: The ID of the game
 *               cat_id:
 *                 type: integer
 *                 example: 1
 *                 description: The ID of the category associated with the game
 *               dev_id:
 *                 type: integer
 *                 example: 1
 *                 description: The ID of the developer associated with the game
 *               game_name:
 *                 type: string
 *                 example: FORNITE
 *                 description: The name of the game
 *               game_date_release:
 *                 type: string
 *                 format: date-time
 *                 example: 2022-10-01T05:00:00.000Z
 *                 description: The release date of the game
 *               game_code_unique:
 *                 type: string
 *                 example: SDSK#\"434
 *                 description: The unique code of the game
 *               game_size:
 *                 type: string
 *                 example: 10.2
 *                 description: The size of the game
 *               game_price:
 *                 type: string
 *                 example: 200
 *                 description: The price of the game
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
 *       - Game
 *     summary: Update an existing game
 *     requestBody:
 *       description: Game data to update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               game_id:
 *                 type: integer
 *                 example: 1
 *                 description: The ID of the game to update
 *               cat_id:
 *                 type: integer
 *                 example: 1
 *                 description: The ID of the category associated with the game
 *               dev_id:
 *                 type: integer
 *                 example: 1
 *                 description: The ID of the developer associated with the game
 *               game_name:
 *                 type: string
 *                 example: New Game Name
 *                 description: The updated name of the game
 *               game_date_release:
 *                 type: string
 *                 format: date-time
 *                 example: 2022-10-01T05:00:00.000Z
 *                 description: The updated release date of the game
 *               game_code_unique:
 *                 type: string
 *                 example: NewSDSK#\"434
 *                 description: The updated unique code of the game
 *               game_size:
 *                 type: string
 *                 example: 15.0
 *                 description: The updated size of the game
 *               game_price:
 *                 type: string
 *                 example: 250
 *                 description: The updated price of the game
 *             required:
 *               - game_id
 *               - cat_id
 *               - dev_id
 *               - game_name
 *               - game_date_release
 *               - game_code_unique
 *               - game_size
 *               - game_price
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
 *                     game_id:
 *                       type: integer
 *                       example: 1
 *                     cat_id:
 *                       type: integer
 *                       example: 1
 *                     dev_id:
 *                       type: integer
 *                       example: 1
 *                     game_name:
 *                       type: string
 *                       example: New Game Name
 *                     game_date_release:
 *                       type: string
 *                       format: date-time
 *                       example: 2022-10-01T05:00:00.000Z
 *                     game_code_unique:
 *                       type: string
 *                       example: NewSDSK#\"434
 *                     game_size:
 *                       type: string
 *                       example: 15.0
 *                     game_price:
 *                       type: string
 *                       example: 250
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
 *                   example: Game not found
 * 
 * /v1/game/{id}:
 *   get:
 *     tags:
 *       - Game
 *     summary: Get a game by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the game to retrieve
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
 *                     game_id:
 *                       type: integer
 *                       example: 1
 *                       description: The ID of the game
 *                     cat_id:
 *                       type: integer
 *                       example: 1
 *                       description: The ID of the category associated with the game
 *                     dev_id:
 *                       type: integer
 *                       example: 1
 *                       description: The ID of the developer associated with the game
 *                     game_name:
 *                       type: string
 *                       example: FORNITE
 *                       description: The name of the game
 *                     game_date_release:
 *                       type: string
 *                       format: date-time
 *                       example: 2022-10-01T05:00:00.000Z
 *                       description: The release date of the game
 *                     game_code_unique:
 *                       type: string
 *                       example: SDSK#\"434
 *                       description: The unique code of the game
 *                     game_size:
 *                       type: string
 *                       example: 10.2
 *                       description: The size of the game
 *                     game_price:
 *                       type: string
 *                       example: 200
 *                       description: The price of the game
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
 *                   example: Game not found
 * 
 *   delete:
 *     tags:
 *       - Game
 *     summary: Delete a game by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the game to delete
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
 *                   example: Game not found
 */

    router_game.get('/v1/game', getGame);
    router_game.get('/v1/game/:id', getGameById);
    router_game.post('/v1/game', createGame);
    router_game.put('/v1/game', updateGame);
    router_game.delete('/v1/game/:id', deleteGame);
export {router_game};