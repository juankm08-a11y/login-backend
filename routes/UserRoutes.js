import express from "express";
import User from "../models/UserModel.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "Error al buscar el usuario" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Error al obtener usuario" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    const newUser = new User({
      email,
      password,
    });

    const savedUser = await newUser.save();

    res.status(200).json({
      message: "Usuario creado exitosamente",
      user: savedUser,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error creando el usuario",
    });
  }
});

export default router;
