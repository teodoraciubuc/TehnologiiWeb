let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");

let app = express();
let router = express.Router();

// Middleware-uri (ajută serverul să înțeleagă cererile)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

const array = [
  { id: 1, name: "Ionuț", age: 25 },
  { id: 2, name: "Alex", age: 18 },
  { id: 3, name: "Mihai", age: 13 },
  { id: 4, name: "Marcel", age: 12 },
  { id: 5, name: "Marius", age: 22 },
];

// Endpoint- trimite lista
router.route("/getList").get((req, res) => {
  res.json(array);
});

// Endpoint -adaugă o pers (POST)
router.route("/postList").post((req, res) => {
  let el = req.body;
  el.id = array.length + 1;
  array.push(el);
  res.json(el);
});

//  Endpoint - primește un id și returnează pers
router.route("/getById/:id").get((req, res) => {
  const id = parseInt(req.params.id);
  const persoana = array.find((p) => p.id === id);
  if (persoana) {
    res.json(persoana);
  } else {
    res.status(404).json({ mesaj: "Persoana nu a fost găsită!" });
  }
});

// Pornire server
let port = 8000;
app.listen(port);
console.log(` Server pornit pe portul ${port}`);
console.log(`Testează: http://localhost:${port}/api/getList`);
