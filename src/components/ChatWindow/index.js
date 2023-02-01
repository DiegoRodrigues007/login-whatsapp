// IMPORT PADRÃO
import React, { useState, useEffect, useRef } from "react";
import "../ChatWindow/Chat-Window.css";

// Import Emoji
import EmojiPicker from "emoji-picker-react";

// IMPORT COMPONENTES
import MessageItem from "../MessageItem/index";

//  IMPORT DE ICONES DO MATERIAL UI
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";

export default ({ user }) => {
  const body = useRef();
  const [emojiOpen, setEmojiOpen] = useState(false);
  {
    /* Responsavel por criar o SetEmojiOpen / SetEmojiClose*/
  }

  {
    /*USESTATE RESPONSAVEL POR ARMAZENAR O TEXTO DIGITADO */
  }
  const [text, setText] = useState("");

  const [list, setList] = useState([
    { author: 123, body: "Bom dia" },
    { author: 123, body: "Bom dia " },
    { author: 147, body: "Tudo bem ?" },
    { author: 123, body: "Tudo sim, e com voce ?" },
    { author: 123, body: "Igualmente " },
    { author: 147, body: "Lorem ipsum Lorem ipsum" },
    { author: 123, body: "hahahahaha" },
    { author: 123, body: "kkkkkkkkkkkk" },
    { author: 147, body: "Ola tudo bem?" },
    { author: 123, body: "Como foi seu dia?" },
    { author: 123, body: "bem " },
    { author: 147, body: "lorem ipsum" },
    { author: 123, body: "hahahahaha" },
    { author: 123, body: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum " },
    { author: 147, body: "lkkkkkkkkkkkkkk" },
    { author: 123, body: "hahahahaha" },
    { author: 123, body: " dummy text of the printing and typesetting industry. " },
    { author: 147, body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { author: 123, body: "hahahahaha" },
    { author: 123, body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " },
    { author: 147, body: " printing and typesetting industry." },
    { author: 123, body: "hahahahaha" },
    { author: 123, body: "Lorem Ipsum is simply  " },
    { author: 147, body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { author: 123, body: "hahahahaha" },
    { author: 123, body: "Lorem ipsum " },
    { author: 147, body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { author: 123, body: "hahahahaha" },
    { author: 123, body: "lorem ipsum " },
    { author: 147, body: "Lorem Ipsum is simply dummy text of the printing " },
    { author: 123, body: "hahahahaha" },
    { author: 123, body: "hahahaha " },
    { author: 147, body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { author: 123, body: "hahahahaha" },
    {
      author: 123,
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      author: 147,
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
    },
  ]);

  useEffect(() => {
    if (body.current.scrollHeight > body.current.offsetHeight) {
      body.current.scrollTop =
        body.current.scrollHeight - body.current.offsetHeight;
    }
  }, [list]);

  const handleOpenEmoji = () => {
    {
      /* Função que abre o icone do emoji*/
    }

    setEmojiOpen(true);
  };

  const handleClose = () => {
    {
      /* Função que fecha o icone do close*/
    }

    setEmojiOpen(false);
  };

  const handleSendClcik = () => {};

  return (
    <div className="chatWindow">
      <div className="chatWindow-header">
        <div className="chatWindow-headerinfo">
          <img
            className="chatWindow-avatar"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt=""
          />
          <div className="chatWindow-name">Diego Rodrigues</div>
        </div>

        <div className="chatWindow-headerbuttons">
          <div className="chatWindow-btn">
            {" "}
            {/* HEADER-  DIV QUE CONTEM OS BOTÕES DO PERFIL (PESQUISA, 3 PONTINHOS, ARQUIVOS)*/}
            <SearchIcon style={{ color: "#919191" }} />
          </div>

          <div className="chatWindow-btn">
            <AttachFileIcon style={{ color: "#919191" }} />
          </div>

          <div className="chatWindow-btn">
            <MoreVertIcon style={{ color: "#919191" }} />
          </div>
        </div>
      </div>

      <div ref={body} className="chatWindow-body">
        {list.map((item, key) => (
          <MessageItem key={key} data={item} user={user} />
        ))}
      </div>

      <div
        className="chatWindow-emojiarea"
        style={{ height: emojiOpen ? "200px" : "0" }}
      >
        {" "}
        {/* CONFIG DOS EMOJI */}
        <EmojiPicker
          width={"auto"}
          onEmojiClick={(emojiObject) =>
            setText((prevMsg) => prevMsg + emojiObject.emoji)
          }
          searchDisabled
          skinTonesDisabled
          disableSkinTonePicker
          previewConfig={{ showPreview: false }}
        />
      </div>

      <div className="chatWindow-footer">
        {" "}
        {/* FOOTER (ESCREVA SUA MENSAGEM, BOTÃO DE EMOJI, ENVIO, AUDIO, CLOSE) */}
        <div className="chatWindow-pre">
          <div
            className="chatWindow-btn"
            onClick={handleClose}
            style={{ width: emojiOpen ? 40 : 0 }}
          >
            <CloseIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatWindow-btn" onClick={handleOpenEmoji}>
            <InsertEmoticonIcon
              style={{ color: emojiOpen ? "#009688" : "#919191" }}
            />
          </div>
        </div>
        <div className="chatWindow-inputarea">
          <input
            className="chatWindow-input"
            tipe="text"
            placeholder="Digite uma mensagem"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="chatWindow-pos">
          <div onClick={handleSendClcik} className="chatWindow-btn">
            <SendIcon style={{ color: "#919191" }} />
          </div>
        </div>
      </div>
    </div>
  );
};
