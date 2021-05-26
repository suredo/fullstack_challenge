import { Router } from "express";

export class Api {
  private routes: Router;

  constructor() {
    this.routes = Router();
    this.endpoints();
  }

  private endpoints() {
    this.routes.post("/addbook", (req, res) => {
      res.send("add book");
    });
    this.routes.get("/books", (req, res) => {
      res.send("get books");
    });
    this.routes.get("/book", (req, res) => {
      res.send("get book");
    });
  }

  /**Returns routes */
  public getRoutes() {
    return this.routes;
  }
}
