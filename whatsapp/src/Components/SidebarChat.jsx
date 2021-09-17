import { Avatar } from "@material-ui/core";
import React from "react";
import db from "./firebase";
import { SidebarChatInfo, SidebarChatt } from "./SidebarChatstyle";
import {Link} from 'react-router-dom';

function SidebarChat({ addNewChat, openchat, id, name, state }) {
  const [seed, setSeed] = React.useState("");
  const [msg, setMsg] = React.useState('')

  React.useEffect(() => {
    if (id ){
      db.collection('users').doc(id).collection('messages').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
        setMsg(snapshot.docs.map((doc) => doc.data()))
      });
    };
  },[id])

  React.useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createchat = () => {
    const username = prompt("Enter the name of user");

    if (username) {
      db.collection("users").add({
        name: username,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/users/${id}`}>
      <SidebarChatt onClick={openchat}>
        <SidebarChatInfo>
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
          {/* {console.log(name,id)} */}
          <h2>{name}</h2>
          <p>{msg[0]?.message}</p>
        </SidebarChatInfo>
      </SidebarChatt>
    </Link>
  ) : (
    <SidebarChatt onClick={createchat}>
      <h2>Add New Chat</h2>
    </SidebarChatt>
  );
}

export { SidebarChat };
