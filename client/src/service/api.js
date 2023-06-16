import axios from 'axios'

const API_URL= 'http://localhost:8000'

const UploadFile= async(data) =>{
    console.log(`${API_URL}/upload`)
    try {
        const response=await axios.post(`${API_URL}/upload`,data);
        return response.data;
    } catch (error) {
        console.log("Cannot give data to backend")
    }
}

export default UploadFile;
