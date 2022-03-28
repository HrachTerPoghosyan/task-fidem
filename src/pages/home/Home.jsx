import "./home.css"
import Header from "../../header/Header";
import Post from "../../posts/Post";
import Footer from "../../sideBar/Footer";
import Check from "../checkin/Check";
import React from "react";

const Home = () => {
    return (
         <>
        <Header/>
             <Check/>
             <div className="home">
            <Post/>

        </div>
         </>
    );
};

export default Home;