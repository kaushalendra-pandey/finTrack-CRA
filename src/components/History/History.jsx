import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import Transaction from '../Transaction/Transaction'

const transaction = [
    {
        imgSrc:"https://res.cloudinary.com/test-cloud-by-kaush/image/upload/v1616668957/samples/animals/cat.jpg",
        detail:"Car Insurance",
        time:"10:43:42 AM",
        amount: "$1200",
        status: "Completed",
        id:1
    },
    {
        imgSrc:"https://res.cloudinary.com/test-cloud-by-kaush/image/upload/v1616668957/samples/animals/cat.jpg",
        detail:"Loan",
        time:"10:43:42 AM",
        amount: "$3400",
        status: "Completed",
        id:2
    },
    {
        imgSrc:"https://res.cloudinary.com/test-cloud-by-kaush/image/upload/v1616668957/samples/animals/cat.jpg",
        detail:"Online Payment",
        time:"10:43:42 AM",
        amount: "$5000",
        status: "Completed",
        id:3
    }
]

const History = () => {
    return (
        <>
            <div>
                <SectionTitle heading={'History'} subHeading={"Transaction of last 6 months"}/>
            </div>
            {
                transaction.map(item => (
                    <Transaction 
                    key={item.id} 
                    detail={item.detail} 
                    amount={item.amount} 
                    status={item.status}
                    time={item.time} 
                    imgSrc={item.imgSrc}/>
                ))
            }
            
        </>
    )
}

export default History
