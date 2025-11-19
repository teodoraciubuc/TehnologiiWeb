const express = require("express");
const Book = require("./Book");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const bookRouter = express.Router();
app.use("/api", bookRouter);

let books = [
  new Book(1, "Dune", "sf", "Frank Herbert"),
  new Book(2, "Robinson Crusoe", "adventure", "Daniel Defoe"),
  new Book(3, "Foundation", "sf", "Asimov"),
];

bookRouter
  .route("/books")
  .get((req, res) => {
    let filteredBooks = req.query.genre
      ? books.filter((x) => x.genre === req.query.genre)
      : books;

    res.json(filteredBooks);
  })

  .post((req, res) => {
    const { id, name, genre, author } = req.body;

    if (!id || !name || !genre || !author) {
      return res.status(400).json({ error: "MissingFields" });
    }

    const exists = books.some((book) => book.id == id);
    if (exists) {
      return res.status(400).json({ error: "DuplicateID" });
    }

    const newBook = new Book(id, name, genre, author);
    books.push(newBook);

    return res.status(201).json(newBook);
  });

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.listen(port, () => {
  console.log("Running on the port " + port);
});
