import express  from "express";
import { UploadImage, getImage } from "../controller/image-controller.js";
import upload from "../utils/upload.js";


const router=express.Router();

router.post('/upload',upload.single('file'), UploadImage)
router.get('/file/:fileId',getImage)

export default router