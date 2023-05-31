import express from "express";


import { registerStudent, registeredstudents, studentDetail, editStudent } from "../controllers/students.js";


const router = express.Router();

router.get("/students", registeredstudents);

router.post("/register", registerStudent );

router.get("/student/:id", studentDetail);

router.patch("/student/:id", editStudent);


export default router;