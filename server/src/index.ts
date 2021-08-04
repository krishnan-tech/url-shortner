import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (_req: express.Request, res: express.Response) => {
  res.send("nodejs - express + typescript");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
