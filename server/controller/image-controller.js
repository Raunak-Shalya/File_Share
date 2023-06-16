import File from "../models/file.js";

export const UploadImage= async(request,response) =>{
    const FileObj={
        path: request.file.path,
        name: request.file.originalname
    }
    try {
       const file=await File.create(FileObj);
       response.status(200).json({ path: `http://localhost:8000/file/${file.id}`}); //d
    } catch (error) {
        console.log(error.message);
    }
}