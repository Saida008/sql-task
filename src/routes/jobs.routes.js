import { Router } from "express";

import {
  search,
  add,
  update,
  remove
} from "../controller/jobs.controller.js";

const router = Router();

router
  .get("/", search)
  .post("/", add)
  .put("/:id", update)
  .delete("/:id", remove);

export default router;