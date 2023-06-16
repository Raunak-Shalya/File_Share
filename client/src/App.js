import './App.css';
import { useEffect, useRef, useState } from 'react';
import UploadFile from './service/api';

function App() {
   const [file,setFile]=useState('');
   const [result,setResult]=useState('');
   const Inputref=useRef();
   const OnUploadClick = () =>{
    Inputref.current.click();
   }
   const onDownloadClick= ()=>{
    if(result){
      window.location.href=result;
    }
    else{
      alert("Please Upload a File inorder to generate a link");
    }
   }
  useEffect(()=>{
    const getImage=async()=>{  
      if(file){
        const data=new FormData();
        data.append('name',file.name)
        data.append('file', file)
       const response=await UploadFile(data);
       setResult(response.path); 
      }
    }
    getImage();
  },[file])
  return (
    <>
    <div className='container'> 
    
    <body>
  <div>
     <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
  </div>
</body>

    <h1 className="heading" >File Sharing App</h1>
    <p className="Para">Upload and share the download link</p>
    <button className="UButton" onClick={()=> OnUploadClick()}>Upload</button>
    <button className='DButton' onClick={()=> onDownloadClick()}>Download</button>
    <input className="inputbutton" type="file" ref={Inputref} onChange={(e)=>setFile(e.target.files[0])}/>
    </div>
    </>
  );
}

export default App;
