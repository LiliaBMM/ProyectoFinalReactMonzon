import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <NavBar/>
      <Main/>  
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
