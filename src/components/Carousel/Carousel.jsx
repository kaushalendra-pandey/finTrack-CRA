import React from 'react'
import Carousel from "react-elastic-carousel"
import { MdAirlineSeatFlat } from 'react-icons/md'
import ISOtoDate from '../../Utilities/ISOtoDate'
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
                    <Card key={item.id} logo={item.icon ||  <MdAirlineSeatFlat size={"3rem"}/>} date={ISOtoDate(item.createdAt)} text={item.description} price={item.amount}/>
                ))
            }
        </Carousel>
    )
}


export default MainCarousel
