import React from 'react';
import {Header} from './layout/header.jsx';
import {Footer} from './layout/footer.jsx';
import {Main} from './layout/main.jsx';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Main/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
