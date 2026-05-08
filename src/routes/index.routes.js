import { Router } from "express";
import employersRouter from "./employers.routes.js";
import jobsRouter from "./jobs.routes.js";

const router = Router();

router.use("/jobs", jobsRouter);
router.use("/employer", employersRouter);

export default router;
