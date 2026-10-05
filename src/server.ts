import app from "./app.js";

const port = Number.parseInt(process.env.PORT ?? "3001", 10);

app.listen(port, "0.0.0.0", () => {
  console.log(`CI/CD Lab running at http://localhost:${port}`);
});
