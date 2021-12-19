import React from 'react'
import styled from "styled-components"
import {BsCalendar3} from "react-icons/bs"
import {GrNotification} from "react-icons/gr"
import ProfileImage from '../ProfileImage/ProfileImage'
import Badge from '../Badge/Badge'

const icon = [
    {
        id:1,
        logo: <BsCalendar3 size={"2rem"}/>
    },
    {
        id:2,
        logo:<GrNotification size={"2rem"}/>
    },
    {
        id:3,
        logo: <ProfileImage imgSrc={"https://res.cloudinary.com/test-cloud-by-kaush/image/upload/v1616668960/samples/people/smiling-man.jpg"} />
    }
]

const Wrapper = styled.div`
    display:flex;
    justify-content: end;
`
const Icon = styled.div`
    margin-right: 2rem;
    transition: transform 0.2s;
    &:hover{
        transform: scale(1.3);
        cursor: pointer;
    }
`
const BadgeContainer = styled.div`
    margin-right: 110px;
    margin-top: -9px;
    position: absolute;
`

const Topnav = () => {
    return (
       <Wrapper>
          {
              icon.map(item => (
                  <>
                    <Icon key={item.id} data-testid="icon">
                        {item.logo}
                    </Icon>
                    {
                        item.id == 2 && (
                            <BadgeContainer>
                                <Badge key={`${item.id}-notify`} notifications={0}/>
                            </BadgeContainer>

                        )
                    }
                  </>
              ))
          }
       </Wrapper>
    )
}

export default Topnav
