import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'

// import AboutUs from './components/AboutUs'
import Header from './components/Header'
import AboutUs from './components/AboutUs';
import Skills from './components/Skills';
import Products from './components/Products';
import ProductsLoadwork from './components/Productsloadwork';
import Stats from './components/Stats';
import Technologies from './components/Technologies';
import Companies from './components/Companies';
import NeedProject from './components/NeedProject'
import Footer from './components/Footer'



function App() {
  return (
    <ChakraProvider>
      <Header/>
     <AboutUs />
     <Skills/>
     <Products/>
     <ProductsLoadwork/>
     <Stats/>
     <Technologies/>
     <Companies/>
     <NeedProject/>
     <Footer/>

    </ChakraProvider>
  );
}

export default App;
