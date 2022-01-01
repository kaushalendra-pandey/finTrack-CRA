import React from "react";
import styled from "styled-components";
import { FiHome, FiMonitor } from "react-icons/fi";
import { BiNotepad } from "react-icons/bi";
import { MdOutlineKeyboard } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import Badge from "../../components/Badge/Badge";
import { useNavigate } from "react-router-dom";
import Tooltip from "react-simple-tooltip"

const icons = [
  {
    icon: <FiHome size={"2rem"} />,
    id: 1,
    notification: 0,
    link: "/",
    tooltip:"Dashboard"
  },
  {
    icon: <FiMonitor size={"2rem"} />,
    id: 2,
    notification: 0,
    link: "/subscription",
    tooltip:"Subscription"
  },
  {
    icon: <BiNotepad size={"2rem"} />,
    id: 3,
    notification: 2,
    link: "/bills",
    tooltip:"Bills"
  },
  {
    icon: <MdOutlineKeyboard size={"2rem"} />,
    id: 4,
    notification: 0,
    link: "/lendAndBorrow",
    tooltip:"Lend and Borrow"
  },
  {
    icon: <CgNotes size={"2rem"} />,
    id: 5,
    notification: 0,
    link: "/blogs",
    tooltip:"Blogs"
  },
];

const Container = styled.div`
  width: 80px;
  height: 100vh;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(50px);
`;

// change color to black when active
const Icon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  transition: transform 0.2s;
  color: grey;
  &:hover {
    transform: scale(1.05);
    color: black;
    border-right: 2px solid black;
  }
`;

const Notification = styled.div`
  position: absolute;
  margin-left: 17px;
  margin-top: -6px;
`;

const IconContainer = styled.div`
  margin-top: 148px;
`;

const BackContainer = styled.div`
  position: absolute;
  background-color: #ececf6;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`;
const Sidenav = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <BackContainer>
        <IconContainer>
          {icons.map((item) => (
            <>
             
                  <Icon
                    onClick={() => navigate(`${item.link}`)}
                    key={item.id}
                    data-testid="sidenav-icon"
                  >
                      <Tooltip content={item.tooltip}>
                        {item.icon}
                      </Tooltip>

                    {item.notification > 0 && (
                      <Notification key={`${item.id}-notify`}>
                        <Badge notifications={item.notification} />
                      </Notification>
                    )}
                  </Icon>
               
            </>
          ))}
        </IconContainer>
      </BackContainer>
    </Container>
  );
};

export default Sidenav;
