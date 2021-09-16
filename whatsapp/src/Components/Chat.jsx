import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import { ChatBody, ChatDetail, ChatFooter ,ChatHeader, ChatHeaderInfo, ChatHeaderRight} from "./Chatstyle";
import DonutLargeIcon from "@material-ui/icons/DonutLargeOutlined";
import MoreVerticon from "@material-ui/icons/MoreVert";
import AttachFile from '@material-ui/icons/AttachFile';

function Chat() {

    const [seed, setSeed] = React.useState('')


    React.useEffect(() => {
      setSeed(Math.floor(Math.random()* 5000));
    },[])


  return (
         <ChatDetail>
      <ChatHeader>
         <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
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

      </ChatBody>
      <ChatFooter>

      </ChatFooter>
  </ChatDetail>

  );
}

export { Chat };
