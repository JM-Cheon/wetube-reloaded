import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send("<h1>Test Express!</h1>");
};
const handleLogin = (req, res) => {
  return res.send("<h1>Login here.</h1>");
};

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => console.log("Server litening on port 4000");

app.listen(PORT, handleListening);
