import "./db";
import Video from "./models/Video";
import app from "./server";

const PORT = 4000;

const handleListening = () =>
  console.log(`Server litening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
