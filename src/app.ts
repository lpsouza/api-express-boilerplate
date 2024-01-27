import express, { Application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";

import user from "./routes/user";

const PORT = process.env.PORT || 8080;

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  }),
);

app.get("/", async (_req, res) => {
  return res.json({ message: "It's alive!" }).status(200);
});

app.use(user);

app.listen(PORT, () => {
  console.log("App is running on port", PORT);
});
