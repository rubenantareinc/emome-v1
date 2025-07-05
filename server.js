import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { v4 as uuid } from 'uuid';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.static('client/dist'));

let users = {};      // in-memory store for users
let timelines = {};  // user timelines

app.post('/api/register', (req, res) => {
  const id = uuid();
  users[id] = { id, ...req.body };
  timelines[id] = [];
  res.json({ id });
});

app.post('/api/:uid/friend', (req, res) => {
  timelines[req.params.uid].push({ id: uuid(), ...req.body });
  res.json({ ok: true });
});

app.get('/api/:uid/timeline', (req, res) => {
  res.json(timelines[req.params.uid] || []);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

