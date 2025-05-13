import axios from "axios";
const URI = process.env.REACT_APP_URI || 'http://localhost:5000';

export async function loginService(data) {
    try{
        return await axios.post(`${URI}/api/login` , data)
            .then((res)=>{
                const response = res.data ;
                return response ;
            })
            .catch((err)=>{
                return {code:-1 , message:"Failed to connect to our server\nERROR : " + err.message}
            })
    }
    catch(err){
        return {code:-1 , message:'Failed to connect to our server'}
    }
}