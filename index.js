import express, { Router } from 'express';
import jwt from 'jsonwebtoken';
import joi from 'joi';
import ee from 'events';

import { db } from './src/data/db/connection';
import { initApi } from './src/api/api';

const app = express();

const port = 3000;

const statEmitter = new ee();
const stats = {
  totalUsers: 3,
  totalBets: 1,
  totalEvents: 1,
};

app.use(express.json());
app.use('/', initApi(Router));



app.listen(port, () => {
  statEmitter.on('newUser', () => {
    stats.totalUsers++;
  });
  statEmitter.on('newBet', () => {
    stats.totalBets++;
  });
  statEmitter.on('newEvent', () => {
    stats.totalEvents++;
  });

  console.log(`App listening at http://localhost:${port}`);
});

// Do not change this line
module.exports = { app };