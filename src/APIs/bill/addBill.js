import axios from "axios"

const addBill = async (url,body) => {
    try {
        const {data} = await axios.post(url,body)
        return data    
    } catch (error) {
        console.log(error)
        throw Error("Bill api exploded")
    }
    
}   

export default addBill