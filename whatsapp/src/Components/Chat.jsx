import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import {
  ChatBody,
  ChatConvo,
  ChatDetail,
  ChatFooter,
  ChatHeader,
  ChatHeaderInfo,
  ChatHeaderRight,
  ChatName,
  ChatTimestamp,
} from "./Chatstyle";
import DonutLargeIcon from "@material-ui/icons/DonutLargeOutlined";
import MoreVerticon from "@material-ui/icons/MoreVert";
import AttachFile from "@material-ui/icons/AttachFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import ArrowBack from "@material-ui/icons/ArrowBack";
import { Sidebar } from "./Sidebar";
import { styles } from "./Chats.module.css";
import { useParams } from "react-router-dom";
import db from "./firebase";

// Chat details which shows messages, timestamp, user.
function Chat({ state }) {
  const [input, setInput] = React.useState("");
  const [seed, setSeed] = React.useState("");

  const { userId } = useParams();
  const [username, SetUsername] = React.useState("");
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    if (userId) {
      db.collection("users")
        .doc(userId)
        .onSnapshot((snapshot) => SetUsername(snapshot.data().name));
    }

    db.collection("users")
      .doc(userId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [userId]);

  // This useEffect is generating random id to create avatar url.
  React.useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  //The sendmessage function store new message send by new user.
  const sendmessage = (e) => {
    e.preventDefault();
    console.log(input);
    setInput("");
  };

  return (
    <ChatDetail>
      <ChatHeader>
        <ArrowBack />
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <ChatHeaderInfo>
          <h3>{username}</h3>
          <p>Last seen at</p>
        </ChatHeaderInfo>
        <ChatHeaderRight>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVerticon />
          </IconButton>
        </ChatHeaderRight>
      </ChatHeader>
      <ChatBody>
        {messages.map((message) => 

            <ChatConvo>
            <ChatName>{message.name}</ChatName>
             {message.message}
            <ChatTimestamp>
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </ChatTimestamp>
            </ChatConvo>
           
        )}
      
      </ChatBody>
      <ChatFooter>
        <InsertEmoticonIcon />
        <form>
          <input
            placeholder="Type a message"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendmessage} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </ChatFooter>
    </ChatDetail>
  );
}

export { Chat };
