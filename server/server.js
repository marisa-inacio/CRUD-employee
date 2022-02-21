const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  hos: "localhost",
  password: "password",
  database: "employeesystem",
});

//inserir na basededados
//express usa se o request info from front (peden ao front) e response (da ao front)
app.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;

  db.query(
    "INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)",
    [name, age, country, position, wage],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

//receber da basededados
app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//updatewage
app.put("/updatewage", (req, res) => {
  const id = req.body.id;
  const wage = req.body.wage;
  db.query(
    "UPDATE employees SET wage = ? WHERE id = ?",
    [wage, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//updatename
app.put("/updatename", (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    db.query(
      "UPDATE employees SET name = ? WHERE id = ?",
      [name, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  //updateage
app.put("/updateage", (req, res) => {
    const id = req.body.id;
    const age = req.body.age;
    db.query(
      "UPDATE employees SET age = ? WHERE id = ?",
      [age, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

    //updatecountry
app.put("/updatecountry", (req, res) => {
    const id = req.body.id;
    const country = req.body.country;
    db.query(
      "UPDATE employees SET country = ? WHERE id = ?",
      [country, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

    //updateposition
app.put("/updateposition", (req, res) => {
    const id = req.body.id;
    const position = req.body.position;
    db.query(
      "UPDATE employees SET position = ? WHERE id = ?",
      [position, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err);
          } else {
            res.send(result);
          }  
    })
})

app.listen(3001, () => {
  console.log("Yes, your server is running on port 3001");
});
