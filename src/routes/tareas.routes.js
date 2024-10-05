
import {Router} from 'express';
import {
  tareasGet,
  tareaGet,
  tareaPost,
  tareaPut,
  tareaDelete,
} from "../controllers/tareas.controllers.js";
    

const router = Router();

   router.get("/", tareasGet);
   router.get("/:id", tareaGet);
   router.post("/", tareaPost);
   router.put("/:id", tareaPut);
   router.delete("/:id", tareaDelete );

export default router;