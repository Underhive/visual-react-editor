import express, { Request, Response, json } from 'express';

import axios from 'axios';

const app = express();
const port = process.env.PORT || 38388;

const apiURL = process.env.API_URL || 'https://api.underhive.in';

const diffs: {
  [url: string]: any;
} = {}

app.use(json());

app.get('/', (_req: Request, res: Response) => {
  res.send('pong');
});

app.post('/edit', (req: Request, res: Response) => {
  const body: {
    history: any;
    sourceList: any;
  } = req.body;

  res.json({
    data: "OK"
  })
})

app.listen(port, () => {
  console.log(`Underhive Server running at http://localhost:${port}`);
});