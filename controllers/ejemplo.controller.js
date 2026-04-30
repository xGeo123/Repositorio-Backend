import Ejemplo from "../models/ejemplo.model.js";
import mongoose from "mongoose";
import express from "express";

export const getAllEjemplos = async (req, res) => {
  console.log("obtiene todos los ejemplos");
  try {
    const ejemplos = await Ejemplo.find({}, { __v: 0 });
    if (ejemplos.length === 0) {
      return res.status(404).json({
        msg: "No se encontraron ejemplos",
      });
    }
    return res.status(200).json({
      ejemplos,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al obtener los ejemplos",
    });
  }
};
export const getEjemploById = async (req, res) => {
  console.log("EJEMPLO POR ID");
  const id = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        msg: "ID no válido",
      });
    }

    const ejemplo = await Ejemplo.findById(id);
    if (!ejemplo) {
      return res.status(404).json({
        msg: "Ejemplo no encontrado",
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: "Error al obtener el ejemplo",
    });
  }
};
