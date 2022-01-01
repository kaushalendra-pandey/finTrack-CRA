import axios from "axios"

const addSubscription = async (url,body) => {
    try {
        const {data} = await axios.post(url,body)
        return data    
    } catch (error) {
        console.log(error)
        return {
        }
    }
    
}   

export default addSubscription