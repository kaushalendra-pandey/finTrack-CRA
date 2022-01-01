import axios from "axios"

const getSubscription = async (url,body={}) => {
    try {
        const {data} = await axios.get(url)
        console.log(data)
        return data?.subscription   
    } catch (error) {
        console.log(error)
        throw Error(error)
    }
    
}   

export default getSubscription