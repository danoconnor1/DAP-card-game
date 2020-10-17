import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout, Header, TextBox } from "./layout.components";
import GameScreen from "./GameScreen.js";

const App = () => (
  <div className="App">
    <Header>Game Title</Header>
    <Layout>
      <GameScreen />
      <TextBox>Start Game!</TextBox>
    </Layout>
  </div>
);

export default App;
