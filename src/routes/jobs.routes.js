// import { Router } from "express";

// import {
//   search,
//   add,
//   update,
//   remove
// } from "../controller/jobs.controller.js";

// const router = Router();

// router
//   .get("/", search)
//   .post("/", add)
//   .put("/:id", update)
//   .delete("/:id", remove);

// export default router;

// import { Router } from "express";
// import jobController from "../controller/jobs.controller.js";

// const router = Router();

// router
//   .get("/", jobController.search)
//   .post("/", jobController.add)
//   .put("/:id", jobController.update)
//   .delete("/:id", jobController.remove);

// export default router;

import {Router} from "express";
import jobController  from "../controller/jobs.controller.js"

const router=Router()

router
    .get("/", jobController.search)
    .post("/", jobController.add)
    .put("/:id", jobController.update)
    .delete("/:id", jobController.remove)

    export default router
