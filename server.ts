import express, { Application } from 'express';
import cors from 'cors';

import db from './db/connection';
import userRoutes from './src/users/users.routes'

// dotenv.config();
// require('./src/associations')
// 

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    users: '/api/users'
  }

  constructor() {
    this.app  = express();
    this.port = '8000';

    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log('Database online');
    } catch (error) {
      console.log('Database offline');
    }
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use( this.apiPaths.users, userRoutes )
  }

  listen() {
    this.app.listen( this.port, () => {
      console.log('Servidor corriendo en puerto ' + this.port );
    })
  }
}

export default Server;