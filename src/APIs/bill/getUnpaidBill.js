import axios from "axios"

const getUnpaidBills = async (url,body) => {
    try {
        const {data} = await axios.get(url)
        console.log(data.unpaidBills)
        return data.unpaidBills   
    } catch (error) {
        console.log(error)
        throw Error("Bill api exploded")
    }
    
}   

export default getUnpaidBills