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
