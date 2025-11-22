const express = require("express");
const app = express();

app.use(express.json());

// Sample Books Data
let books = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
  { id: 2, title: "Atomic Habits", author: "James Clear" }
];

// Get all books
app.get("/books", (req, res) => {
  res.json(books);
});

// Add a book
app.post("/books", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author
  };
  books.push(newBook);
  res.json(newBook);
});

// Delete a book
app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  books = books.filter(book => book.id !== id);
  res.json({ message: "Book deleted" });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000/");
});

