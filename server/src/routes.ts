import express from "express";
import { celebrate, Joi } from "celebrate";
import multer from "multer";
import multerConfig from "./config/multer";

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

// nomenclaturas comuns para nomes dos métodos:
// index (listagem), show (item único), create, update/store, delete/destroy

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get("/items", itemsController.index);

// Passa a imagem enviada antes de montar e criar o novo ponto
routes.post(
  "/points",
  upload.single("image"),
  celebrate(
    {
      body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().max(2),
        items: Joi.string().required(),
      }),
    },
    {
      abortEarly: false,
    }
  ),

  pointsController.create
);

routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);

export default routes;