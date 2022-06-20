import React from "react";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";
import request from "./config/Request";

const Home = () => {
  return (
    <div className='App'>
      {/* Navbar */}
      <Nav />
      {/* Banner */}
      <Banner />

      {/* Rows */}
      <Row
        title='Originaux Netfilx'
        fetchUrl={request.fetchNetflixOrignals}
        isPoster={true}
      />
      <Row title='Tendances actuelles' fetchUrl={request.fetchTrending} />
      <Row title='Les mieux notés' fetchUrl={request.fetchTopRated} />
      <Row title='Actions' fetchUrl={request.fetchTActionMovies} />
      <Row title='Horreurs' fetchUrl={request.fetchTHorrorMovies} />
      <Row title='Comédies' fetchUrl={request.fetchTComedyMovies} />
      <Row title='Romances' fetchUrl={request.fetchTRomanceMovies} />
      <Row title='Documentaires' fetchUrl={request.fetchTDocumentaries} />

      {/* Video */}

      {/* Quick view */}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
