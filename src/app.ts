import express, { Application, Request, Response } from 'express';
import router from './routes/index.route.js';

const app:Application = express();
const port = 3000;

app.use(express.json());

app.use('/api/v1', router);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
