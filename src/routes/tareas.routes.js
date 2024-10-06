
import {Router} from 'express';
import { check } from "express-validator";
import {
  tareasGet,
  tareaGet,
  tareaPost,
  tareaPut,
  tareaDelete,
} from "../controllers/tareas.controllers.js";

import { validarCampos } from '../middlewares/validarCampos.js';
import { esEstadoValido, existeTareaPorId } from '../helpers/db-validator.js';
    

const router = Router();

   router.get("/", tareasGet);
   router.get("/:id", tareaGet);
   router.post(
     "/",
     [
       check("title", "El titulo es obligatorio").not().isEmpty(),
       check(
         "title",
         "El password debe tener más de 6 caracteres y como máximo 50"
       ).isLength({ min: 6, max: 50 }),
       check("description", "La descripción es obligatoria").not().isEmpty(),
       check(
         "description",
         "La descripción debe tener más de 20 caracteres y como máximo 250"
       ).isLength({ min: 5, max: 250 }),
       check("estado", "No es un estado válido").custom(esEstadoValido),
       validarCampos,
     ],
     tareaPost
   );
   router.put(
     "/:id",
     [
       check("id", "No es un ID válido").isMongoId(),
       check("id").custom(existeTareaPorId),
       check("estado", "No es un estado válido").custom(esEstadoValido),
       validarCampos,
     ],
     tareaPut
   );
   router.delete(
     "/:id",
     [
       check("id", "No es un ID válido").isMongoId(),
       check("id").custom(existeTareaPorId),
     ],
     tareaDelete
   );

export default router;