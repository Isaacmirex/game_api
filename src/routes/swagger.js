import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

//Metadata info about API
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Game company API',
            version: '1.0.0',
            description: 'API for Game company'
        },
    },
    apis: ['src/routes/category.routes.js', 'src/routes/developer.routes.js', 'src/routes/game.routes.js'],
};

const swaggerSpecs = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
    app.use('/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
    app.get('/v1/docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpecs);
    });
    console.log(`Swagger Docs running at http://localhost:${port}/v1/docs`);
};

export {swaggerDocs};