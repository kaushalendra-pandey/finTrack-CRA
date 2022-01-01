import axios from "axios"

const getPaidBill = async (url,body) => {
    try {
        const {data} = await axios.get(url)
        console.log(data.paidBills)
        return data.paidBills   
    } catch (error) {
        console.log(error)
        throw Error("Bill api exploded")
    }
    
}   

export default getPaidBill