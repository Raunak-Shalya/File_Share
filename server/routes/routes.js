import { Express } from "express";
import { UploadImage } from "../controller/image-controller";


const router=Express.router();

router.post('/upload',UploadImage)


export default router