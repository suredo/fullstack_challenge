import { Request, Response } from "express";
import Book from "../models/book";

export class BookController {
  public addBook(req: Request, res: Response) {
    Book.create(req.body)
      .then(() => {
        res.status(200).send({ success: true, msg: "Book added" });
      })
      .catch((err) =>
        res.status(400).send({ success: false, msg: "Couldn't add book info" })
      );
  }
}
