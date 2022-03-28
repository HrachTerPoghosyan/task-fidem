import React from "react";
import TopBar from "./topBar/TopBar";
import Header from "./header/Header";
import Home from "./pages/home/Home";
import Footer from "./sideBar/Footer";
import Check from "./pages/checkin/Check";


function App() {
  return (
      <>
    <TopBar/>
    <Home/>
        <Footer/>
      </>
  );
}

export default App;
