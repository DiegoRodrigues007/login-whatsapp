import React, { useState, useEffect } from "react";
import "../../App.css";

// import { useNavigate } from "react-router-dom";
// import Button from "../../components/Button";
// import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

// IMPORT MATERIAL UI
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import SmartToyIcon from '@mui/icons-material/SmartToy';

// IMPORT DE COMPONENTES
import ChatListIten from "../../components/ListContact/ChatListItem";
import ChatIntro from "../../components/Chat/ChatIntro";
import ChatWindow from "../../components/ChatWindow/";
import NewChat from "../../components/NewChat";
import MessageAutomatic from "../../components/MessageAutomatic";

const Home = () => {
  // const { signout } = useAuth();

  // Esse useState é responsavel por criar as conversar, cada objeto criado é uma nova conversa adicionada
  const [chatlist, setChatList] = useState([
    {
      chatId: 1,
      title: "Fulano",
      imagem: "https://www.w3schools.com/howto/img_avatar.png",
    },

    {
      chatId: 2,
      title: "Fulano",
      imagem: "https://www.w3schools.com/howto/img_avatar.png",
    },

    {
      chatId: 3,
      title: "Fulano",
      imagem: "https://www.w3schools.com/howto/img_avatar.png",
    },

    {
      chatId: 4,
      title: "Fulano",
      imagem: "https://www.w3schools.com/howto/img_avatar.png",
    },

    {
      chatId: 5,
      title: "Fulano",
      imagem: "https://www.w3schools.com/howto/img_avatar.png",
    },
  ]);

  // Esse useState é responsavel por dizer qual chat esta ativo no momento
  const [activeChat, setActiveChat] = useState({});


  const [user, setUser] = useState({
    id: 147,
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    name: "Diego",
  });


  // ESSE USESTATE ESTA SENDO UTILIZADO PARA CRIAR A NOVA CONVERSA 
  const [showNewChat, setShowNewChat] = useState(false);
  const handleNewChat = () => {
    setShowNewChat(true);
  };


  // ESSE USESTATE ESTA SENDO UTILIZADO PARA GERAR UMA LISTA ONDE O USUARIO IRA CONSEGUIR CRIAR SUA MENSAGEM AUTOMATICA
  const [showNewBot, setShowNewBot] = useState(false);
  const handleNewBot = () =>{
    setShowNewBot(true);
  }

  return (
    <C.Container>
      <div className="app-window">
        <div className="sidebar">
          <NewChat
            chatlist={chatlist}
            user={user}
            show={showNewChat}
            setShow={setShowNewChat}
          />
          <MessageAutomatic
          chatlist={chatlist}
          user={user}
          show = {showNewBot}
          setShow={setShowNewBot}
          />
          <header className="header">
            <img
              className="header-avatar"
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Foto de perfil"
            />
            <div className="header-buttons">

              <div onClick={handleNewBot} className="header-btn">
                  <SmartToyIcon style= {{color: "#919191"}}
                  />
              </div>

              <div className="header-btn">
                <DonutLargeIcon style={{ color: "#919191" }} />
              </div>

              <div onClick={handleNewChat} className="header-btn">
                <ChatIcon style={{ color: "#919191" }} />
              </div>

              <div className="header-btn">
                <MoreVertIcon style={{ color: "#919191" }} />
              </div>
            </div>
          </header>

          <div className="search">
            <div className="search-input">
              <SearchIcon fontSize="small" style={{ color: "#919191" }} />
              <input
                type="search"
                placeholder="Procurar ou começar uma nova conversa"
              />
            </div>
          </div>

          {/* O USESTATE ESTA SENDO UTILIZADO NESSA DIV PARA GERAR A LISTA DE USUARIOS */}
          <div className="chatlist">
            {chatlist.map((item, key) => (
              <ChatListIten
                key={key}
                data={item}
                
                active={activeChat.chatId === chatlist[key].chatId}
                onClick={() => setActiveChat(chatlist[key])}
              />
            ))}
          </div>
        </div>
        <div className="contentarea">
          {/* Quando existir um chat ativo  */}

          {activeChat.chatId !== undefined && <ChatWindow user={user} />}

          {/* Quando não existir um chat ativo, ele ira retornar para a página principal */}

          {activeChat.chatId === undefined && <ChatIntro />}
        </div>
      </div>
    </C.Container>
  );
};

export default Home;
