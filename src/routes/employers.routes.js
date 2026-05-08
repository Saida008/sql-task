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

const router = Router();

router
  .get("/", searchEmployer)
  .post("/", addEmployer)
  .put("/:id", updateEmployer)
  .delete("/:id", deleteEmployer);

export default router;