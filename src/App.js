import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './context/CartContex';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header/>
        <NavBar/>
        <Main/>  
        <Footer/>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
