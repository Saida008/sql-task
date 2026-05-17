// import { Router } from "express";
// import { searchEmployer, addEmployer } from "../controller/employers.controller.js";

// const router = Router();

// router
//   .get("/", searchEmployer)
//   .post("/add", addEmployer);
//   .put("/:id", updateEmployer)
//   .delete("/:id", deleteEmployer);
// export default router;
import { Router } from "express";

import {
  searchEmployer,
  addEmployer,
  updateEmployer,
  deleteEmployer
} from "../controller/employers.controller.js";

 import { authMiddleware } from "../middleware/auth.middleware.js"; 
import { validate } from "../middleware/validate.js";
import {
  addEmployerSchema, updateEmployerSchema
} from "../validation/employers.validation.js"; // 

const router = Router();

router
  .get("/", searchEmployer)
  .post("/add", authMiddleware,validate(addEmployerSchema), addEmployer)
  .put("/:id", authMiddleware, validate(updateEmployerSchema), updateEmployer)
  .delete("/:id", deleteEmployer);

// export {
//   router
// }

export default router