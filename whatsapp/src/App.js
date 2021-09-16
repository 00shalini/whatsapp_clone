import "./App.css";
import { Sidebar } from "./Components/Sidebar";
import {Chat} from './Components/Chat';
import React from "react";
import { Login } from "./Components/Login";

function App() {

  const [user, setUser] = React.useState(null)

  return (
   
    <div className="app">
       {!user ? (
      <Login/>
    ) : (
      <div className="app-body">
      <Sidebar/>
      <Chat/>
    </div>
    )}
     
    </div>
  );
}

export default App;
