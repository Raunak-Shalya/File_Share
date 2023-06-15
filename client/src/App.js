import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
   const [file,setFile]=useState('');
   const Inputref=useRef();
   const OnUploadClick = () =>{
    Inputref.current.click();
   }

  useEffect(()=>{
    const getImage=async()=>{   //doubt
      if(file){
        const data=new FormData();
        data.append('name',file.name)
        data.append('file', file)
      }
    }
    getImage();
  },[file])
  return (
    <>
    <h1 className="heading" >File Sharing App</h1>
    <p className="Para">Upload and share the download link</p>
    <button className="UploadButton" onClick={()=> OnUploadClick()}>Upload</button>
    <input className="inputbutton" type="file" ref={Inputref} onChange={(e)=>setFile(e.target.files[0])}/>
    </>
  );
}

export default App;
