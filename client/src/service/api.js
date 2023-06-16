import axios from 'axios'

const API_URL= 'http://localhost:8000'

const UploadFile= async(data) =>{
    try {
        const response=await axios.post(`${API_URL}/upload`,data);
        return response.data;
    } 
    catch (error) {
        console.log("Cannot give data to backend", error.message)
    }
}

export default UploadFile;
