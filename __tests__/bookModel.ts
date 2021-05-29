import Book from "../server/models/book";

const title = "Sled Biography";
const description = "A book about an amazing programmer";
const author = "Sled C. S.";

describe("Just a test", () => {
  it("Should return error if title is not passed", (done) => {
    const book = new Book({ description, author });
    book.validate((err) => {
      expect(err).toBeTruthy;
      done();
    });
  });
  it("Should return error if description is not passed", (done) => {
    const book = new Book({ title, author });
    book.validate((err) => {
      expect(err).toBeTruthy;
      done();
    });
  });
  it("Should return error if author is not passed", (done) => {
    const book = new Book({ title, description });
    book.validate((err) => {
      expect(err).toBeTruthy;
      done();
    });
  });
});
