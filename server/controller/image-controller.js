import File from "../models/file.js";

export const UploadImage= async(request,response) =>{
    const FileObj={
        path: request.file.path,
        name: request.file.originalname
    }
    try {
       const file=await File.create(FileObj);
       response.status(200).json({ path: `http://localhost:8000/file/${file._id}`}); //d
    } catch (error) {
        console.log(error.message);
    }
}

export const getImage= async(request,response) =>{
   try {
     const file=await File.findById(request.params.fileId);
     file.downloadCounter++;
     await file.save();
     response.download(file.path,file.name);
   } 
   catch (error) {
    console.log("Cannot get Image from DB")
    console.log(error.message)
   }
}