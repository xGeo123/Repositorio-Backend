import { Router } from "express";
import {
  getAllEjemplos,
  getEjemploById,
  postEjemplo,
  putEjemplo,
  deleteEjemplo,
} from "../controllers/ejemplo.controller.js";
const ejemplo = Router();
ejemplo.get("/", getAllEjemplos);
ejemplo.get("/:id", getEjemploById);

ejemplo.put("/:id", putEjemplo);

ejemplo.post("/", postEjemplo);

ejemplo.delete("/:id", deleteEjemplo);

export default ejemplo;
