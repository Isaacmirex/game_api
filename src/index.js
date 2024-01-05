import express from 'express';
import {router_category} from './routes/category.routes.js';
import {router_developer} from './routes/developer.routes.js';
import {router_game} from './routes/game.routes.js'
import {swaggerDocs as V1SwaggerDocs} from './routes/swagger.js';

const PORT = process.env.PORT || 3000;

const app = express()
//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//swagger
V1SwaggerDocs(app, PORT);
//routes
app.use("/", router_category);
app.use("/", router_developer);
app.use("/", router_game);
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});
console.log("Server on port 3000")