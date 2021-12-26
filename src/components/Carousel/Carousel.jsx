import React from 'react'
import Carousel from "react-elastic-carousel"
import Card from '../Card/Card'

const breakpoints = [
    {width:1, itemsToShow:1},
    {width:550, itemsToShow:3},
    {width:768, itemsToShow:4},
    {width:1200, itemsToShow:4},

]

const MainCarousel = ({items}) => {
    return (
        <Carousel breakPoints={breakpoints}>
            {
                items.map(item => (
                    <Card key={item.id} logo={item.icon} date={item.date} text={item.title} price={item.amount}/>
                ))
            }
        </Carousel>
    )
}


export default MainCarousel
