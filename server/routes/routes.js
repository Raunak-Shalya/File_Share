import express  from "express";
import { UploadImage } from "../controller/image-controller.js";
import upload from "../utils/upload.js";


const router=express.Router();

router.post('/upload',upload.single('file'), UploadImage)


export default router