const express = require("express");
const app = express();
const controls = require("./controllers/messages_controllers");

app.use(express.json());
app.use(express.static(__dirname + "/../public/build"));

app.get("/api/messages", controls.read);
app.post("/api/messages", controls.create);
app.put("/api/messages/:id", controls.update);
app.delete("/api/messages/:id", controls.delete);

const port = 4040;
app.listen(port, () => {
  console.log(`Sever is listening on Port: ${port}`);
});
