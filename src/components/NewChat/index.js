// IMPORT PADRÃO
import React, { useState } from "react";
import "../NewChat/NewChat.css";

// IMPORT ICONS MATERIAL UI
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GroupIcon from "@mui/icons-material/Group";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";

// IMPORT COMPONENTS
import MessageAutomatic from "../MessageAutomatic";

export default ({ user, chatlist, show, setShow }) => {
  const [list, setList] = useState([
    {
      id: 123,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Diego",
    },
    {
      id: 123,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Diego",
    },
    {
      id: 123,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Diego",
    },
    {
      id: 123,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Diego",
    },
    {
      id: 123,
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Diego",
    },
  ]);

  const handleClose = () => {
    setShow(false);
  };

  const [showNewChat, setShowNewChat] = useState(false);
  const handleNewChat = () => {
    setShowNewChat(true);
  };

  return (
    <div className="newChat" style={{ left: show ? 0 : -415 }}>
      <div className="newChat-head">
        <div onClick={handleClose} className="newChat-backbutton">
          <ArrowBackIcon style={{ color: "#FFFF" }} />
        </div>
        <div className="newChat-headtitle">Nova Conversa</div>
      </div>
      <div className="funcionalidades">
        <MessageAutomatic
          chatlist={chatlist}
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}
        />

        <div className="styles-components">
          <GroupIcon style={{ color: "#2A948A" }} />
          <p>Novo grupo</p>
        </div>
        <div onClick={handleNewChat} className="styles-components">
          <SpeakerNotesIcon style={{ color: "#2A948A" }} />
          <p>Chat Automático</p>
        </div>
        <div className="styles-components">
          <GroupAddIcon style={{ color: "#2A948A" }} />
          <p>Novo Contato</p>
        </div>
      </div>
      <div className="newChat-List">
        {list.map((item, key) => (
          <div className="newChat-item" key={key}>
            <img className="newChat-itemavatar" src={item.avatar} alt=" " />
            <div className="newChat-itemname">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
