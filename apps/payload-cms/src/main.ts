import 'dotenv/config';
import payload from 'payload';
import express from 'express';
import { buildConfig } from 'payload/config';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});
const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET!,
    mongoURL: process.env.MONGODB_URI!,
    express: app,
    config: buildConfig({}),
  });
  app.listen(port, host, () => {
    console.log(`[ ready ] http://${host}:${port}`);
  });
};

start();
