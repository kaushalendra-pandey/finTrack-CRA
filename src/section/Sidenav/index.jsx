import React from "react";
import styled from "styled-components";
import { FiHome, FiMonitor } from "react-icons/fi";
import { BiNotepad } from "react-icons/bi";
import { MdOutlineKeyboard } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { GiTombstone } from "react-icons/gi";
import Badge from "../../components/Badge/Badge";
import { useNavigate } from "react-router-dom";

const icons = [
  {
    icon: <FiHome size={"2rem"} />,
    id: 1,
    notification: 0,
    link: "/",
  },
  {
    icon: <FiMonitor size={"2rem"} />,
    id: 2,
    notification: 0,
    link: "/subscription",
  },
  {
    icon: <BiNotepad size={"2rem"} />,
    id: 3,
    notification: 2,
    link: "/bills",
  },
  {
    icon: <MdOutlineKeyboard size={"2rem"} />,
    id: 4,
    notification: 0,
    link: "/lendAndBorrow",
  },
  {
    icon: <CgNotes size={"2rem"} />,
    id: 5,
    notification: 0,
    link: "/blogs",
  },
  {
    icon: <GiTombstone size={"2rem"} />,
    id: 6,
    notification: 0,
    link: "/",
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
                {item.icon}

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
