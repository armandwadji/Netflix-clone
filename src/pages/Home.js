import React from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import Row from "../components/Row/Row";
import request from "../config/Request";

const Home = () => {

  return (
    <div className='App'>
      <Nav />
      <Banner />
      { request.map( ( { title, genreUrl, isPoster }, key ) => <Row key={key} title={ title } fetchUrl = {genreUrl} isPoster={isPoster} /> )}
      <Footer />
    </div>
  );
};

export default Home;
