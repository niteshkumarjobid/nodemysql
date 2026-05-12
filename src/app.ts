import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import swaggerUi from 'swagger-ui-express';

import articleRoutes from './routes/article.routes';
import externalRoutes from './routes/external.routes';

import swaggerSpec from './swagger/swagger';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/api/articles', articleRoutes);
app.use('/api/external', externalRoutes);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;