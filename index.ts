import express from "express";

const app = express();

app.get("/", (req, res) => {
  // send a text message

  res.status(200).send("WELCOME TO BUN SERVER, ADDING A NEW ONE!");
});

app.listen(Bun.env.PORT, () => {
  console.log(`Listening at port ${"http://localhost"}:${Bun.env.PORT}`);
});
