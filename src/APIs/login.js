import axios from "axios"

const login = async (url, body) => {
    try {
        const {data} = await axios.post(url,body)
        console.log(">>>>",data)
        localStorage.setItem("token",data?.user?.token)
        window.location.reload()
    } catch (error) {
        console.log(error)   
    }
   

}

export default login