import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';

function App() {

   const Inputref=useRef();

   const OnUploadClick = () =>{
    console.log("Raunak")
    Inputref.current.click();
   }


  return (
    <>
    <h className="heading" >File Sharing App</h>
    <p className="Para">Upload and share the download link</p>
    <button className="UploadButton" onClick={()=> OnUploadClick()}>Upload</button>
    <input className="inputbutton" type="file"ref={Inputref}/>
    </>
  );
}

export default App;
