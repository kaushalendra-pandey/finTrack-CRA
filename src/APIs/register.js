import axios from "axios"

const register = async (url, body) => {
    try {
        const {data} = await axios.post(url,body)
        console.log(">>>>",data)
        localStorage.setItem("token",data?.user?.token)
        window.location.reload()
    } catch (error) {
        throw Error(error)  
    }
   

}

export default register