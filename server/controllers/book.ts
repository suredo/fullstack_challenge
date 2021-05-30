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

  public getBooks(req: Request, res: Response) {
    Book.find()
      .then((data) => {
        if (data) {
          return res.status(200).send({ success: true, userData: data });
        } else {
          res.status(404).send({
            success: false,
            msg: "There's no book registered yet.",
          });
        }
      })
      .catch((err) =>
        res.status(500).send({
          success: false,
          err,
        })
      );
  }
}
