import { Router } from "express";
import employersRouter from "./employers.routes.js";
import jobsRouter from "./jobs.routes.js";
import {router as authRouter} from "./auth.routes.js"

const router = Router();

router.use("/jobs", jobsRouter);
router.use("/employer", employersRouter);
router.use('/auth', authRouter)
export default router;
