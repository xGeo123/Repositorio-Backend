import mongoose from "mongoose";
import colors from "colors";

let isConected = false;

const conectarAMongoDB = async () => {
  if (isConected) {
    console.log("Ya esta conectado a MongoDB".green);
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    isConected = true;
    console.log("Conectado a MongoDB".green);
  } catch (error) {
    console.log("Fallo inicial al conectar a MongoDB:".red);
    console.error(error);
  }
};

const db = mongoose.connection;

db.on("error", (error) => {
  isConected = false;
  console.log("Error en el evento de conexión a MongoDB:".red);
  console.error(error);
});

db.once("open", () => {
  isConected = true;
});

db.on("disconnected", () => {
  isConected = false;
  console.log("Desconectado de MongoDB".yellow);
});

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("MongoDB desconectado".yellow);
  process.exit(0);
});

export { conectarAMongoDB, isConected };