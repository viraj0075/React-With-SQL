import express from "express";
import mysql from "mysql";
import { DELETE_QUERY, INSERT_QUERY, SELECT_BY_ID, SELECT_QUERY, UPDATE_QUERY } from "./src/query.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "book-tests",
});

app.get("/", (req, res) => {
  res.json("Hello this is the Backend ");
});

app.get("/books", (req, res) => {
  const getBooks = SELECT_QUERY;
  db.query(getBooks, (data, err) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/postbooks", (req, res) => {
  const { title, desc, cover, price } = req.body;

  const insertBooks = INSERT_QUERY;
  const values = [title, desc, cover, price];

  db.query(insertBooks, [values], (data, err) => {
    if (err) return res.json(err);
    return res.json("Data Inserted Successfully");
  });
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const deleteBooks = DELETE_QUERY;

  db.query(deleteBooks, [bookId], (data, err) => {
    if (err) return res.json(err);
    return res.json("Data Deleted Successfully");
  });
});

app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const updateBooks = UPDATE_QUERY;
    const { title, desc, cover, price } = req.body;
    const values = [title, desc, cover, price];


  
    db.query(updateBooks, [...values,bookId], (data, err) => {
      if (err) return res.json(err);
      return res.json("Data updated Successfully");
    });
  });

app.get("/booksbyid/:id",(req,res) => 
{
  const bookId = req.params.id;
  const selectById = SELECT_BY_ID;

  db.query(selectById,[bookId],(data,err) => 
  {
    if(err) return res.json(err);
    else return res.json(data,"Data Fetched Successfully")
  })
})

app.listen(8800, () => {
  console.log("Connected To Backend Sucessfully ");
});
