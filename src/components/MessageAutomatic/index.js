// IMPORT PADRÃO
import React, { useState } from "react";
import "../NewChat/NewChat.css";
import "../MessageAutomatic/MessageAutomatic.css";

// IMPORT ICONS MATERIAL UI
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

// IMPORT COMPONENTS

import ChatIntro from "../Chat/ChatIntro";
import Painel from "../Painel";


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

  return (
    <div className="newChat" style={{ left: show ? 0 : -415 }}>
      <div className="newChat-head">
        <div onClick={handleClose} className="newChat-backbutton">
          <ArrowBackIcon style={{ color: "#FFFF" }} />
        </div>
        <div className="newChat-headtitle">Crie uma mensagem automática</div>
      </div>
      {/* esta div esta gerando a lista de usuarios */}
      <div className="chat-container">
        <div className="icons-container">
          <div className="chat-icons">
            <InsertDriveFileIcon className="icon" />
            <p>New</p>
          </div>
          <div className="chat-icons">
            <InsertDriveFileIcon className="icon" />
            <p>Import</p>
          </div>
          <div className="chat-icons">
            <InsertDriveFileIcon className="icon" />
            <p>Export</p>
          </div>
          <div className="chat-icons">
            <InsertDriveFileIcon className="icon" />
            <p>Delete</p>
          </div>
        </div>
      </div>

      <div className="container-table">
        <div>
          <table className="table" border={2}>
            <tr className="title-table">
              <td>Nome</td>
              <td>Número</td>
            </tr>
            <tr>
              <td>
                <input className="table-input" type="text"></input>
              </td>
              <td>
                <input className="table-input" type="number"></input>
              </td>
            </tr>
            <tr>
              <td>
                <input className="table-input" type="text"></input>
              </td>
              <td>
                <input className="table-input" type="number"></input>
              </td>
            </tr>
            <tr>
              <td>
                <input className="table-input" type="text"></input>
              </td>
              <td>
                <input className="table-input" type="number"></input>
              </td>
            </tr>
            <tr>
              <td>
                <input className="table-input" type="text"></input>
              </td>
              <td>
                <input className="table-input" type="number"></input>
              </td>
            </tr>
            <tr>
              <td>
                <input className="table-input" type="text"></input>
              </td>
              <td>
                <input className="table-input" type="number"></input>
              </td>
            </tr>
            <tr>
              <td>
                <input className="table-input" type="text"></input>
              </td>
              <td>
                <input className="table-input" type="number"></input>
              </td>
            </tr>
            <tr>
              <td>
                <input className="table-input" type="text"></input>
              </td>
              <td>
                <input className="table-input" type="number"></input>
              </td>
            </tr>
            <tr>
              <td>
                <input className="table-input" type="text"></input>
              </td>
              <td>
                <input className="table-input" type="number"></input>
              </td>
            </tr>
            <tr>
              <td>
                <input className="table-input" type="text"></input>
              </td>
              <td>
                <input className="table-input" type="number"></input>
              </td>
            </tr>
            <tr>
              <td>
                <input className="table-input" type="text"></input>
              </td>
              <td>
                <input className="table-input" type="number"></input>
              </td>
            </tr>
          </table>
        </div>
      </div>

        
      




    </div>
  );
};
