// App.js
import React from 'react';
import { BrowserRouter , Route, Routes ,} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';



function App() {
  return (
  
    <BrowserRouter>
      <Header />
     
        <Sidebar />
        <Routes>
          <Route exact path="/" component={Home} />
        
        </Routes>
     
      <Footer />
    </BrowserRouter>
   
  );
}

export default App;

