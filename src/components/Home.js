import React from "react";
import chatLogo from "../imgs/chat-box.png";
import "../Home.css";

function Home() {
  return (
    <div className="home">
      <img src={chatLogo} alt="chat cloud" className="home__logo" />
      <h1>
        Create or choose from existing rooms and start chatting with people
      </h1>
    </div>
  );
}

export default Home;
