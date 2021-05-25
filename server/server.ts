import express from "express";
import * as db from "./db";

export class Server {
  private app: express.Application;
  constructor(private port: number) {
    this.app = express();
  }

  /**Initializes express*/
  public async init() {
    this.setupExpress();
    await this.databaseSetup();
  }

  /**Database setup
   * Initializes connection with database
   */
  private async databaseSetup() {
    await db.connect();
  }

  /**Middlewares setup*/
  private setupExpress() {
    this.app.use(express.json());
  }

  /**Initilizes server at given port*/
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Listening on port ${this.port}`);
    });
  }
}
