import axios from "axios"

const login = async (url, body) => {
    try {
        const {data} = await axios.post(url,body)
        console.log(">>>>",data)
        localStorage.setItem("token",data?.user?.token)
        localStorage.setItem("first_name",data?.user?.first_name)
        localStorage.setItem("last_name",data?.user?.last_name)
        localStorage.setItem("email",data?.user?.email)
        window.location.reload()
    } catch (error) {
        console.log(error.response.data.message || error.response.data)
        throw Error(error.response.data.message || error.response.data)  
    }
   

}

export default login