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


// Chat details which shows messages, timestamp, user.
function Chat() {
  const [input, setInput] = React.useState("");
  const [seed, setSeed] = React.useState("");


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
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <ChatHeaderInfo>
          <h3>Room name</h3>
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
        <ChatConvo>
          <ChatName>Shalini Sharma</ChatName>
          hey guys
          <ChatTimestamp>3:52 pm</ChatTimestamp>
        </ChatConvo>
        <ChatConvo>hey guys</ChatConvo>
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
