interface IBook {
  title: string;
  description: string;
  author: string;
}

export const addBook = async (book: IBook) => {
  const request = await fetch("http://localhost:3003/api/addbook", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...book }),
  });

  return request.json();
};

export const getBooks = async () => {
  const request = await fetch("http://localhost:3003/api/books");

  return request.json();
};

export const getBook = async (id: string) => {
  const request = await fetch(`http://localhost:3003/api/book/${id}`);

  return request.json();
};

export const getBooksBySearch = async (text: string) => {
  const request = await fetch(`http://localhost:3003/api/search/${text}`);

  return request.json();
};
