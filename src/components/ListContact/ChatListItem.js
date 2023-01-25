import React from "react";
import "../../components/ListContact/ChatListItem.css";

export default ({ onClick, active, data }) => {
  return (
    <div className={`chatListItem ${active ? "active" : ""}`} onClick={onClick}>
      <img
        className="chatListItem-avatar"
        src={data.imagem}
        alt="Imagem de perfil"
      />
      <div className="chatListItem-lines">
        <div className="chatListItem-line">
          <div className="chatListItem-name">{data.title}</div>
          <div className="chatListItem-date">19:00</div>
        </div>

        <div className="chatListItem-line">
          <div className="chatListItem-lastMsg">
            <p>Opa, Tudo bem ?</p>
          </div>
        </div>
      </div>
    </div>
  );
};
