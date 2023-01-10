import React from 'react';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import { Main } from '../styles/Home';

function Home() {
  return (
    <Main>
      <h1>Attack on Titan API</h1>
      <p>Data from the anime Attack on Titan! I don't own anything about the anime, 
        this project is only intended to exercise my knowledge. Enjoy!</p>
      <Menu />
      <Footer />
    </Main>
  )
}

export default Home;