import React from 'react';

import GlobalStyle from './assets/styles/global';
import { Content } from './assets/styles/style';

import Home from './components/home';
import Sidebar from './components/sidebar'

import { Helmet } from 'react-helmet';


function App() {
  return (
    <>
      <GlobalStyle/>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="author" content="Juliano Alves"/>
        <title>Whatsapp Clone</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,700,900&display=swap" rel="stylesheet"/>>
      </Helmet>
      <Content>
        <Sidebar/>
        <Home/>
      </Content>
    </>
  );
}

export default App;
