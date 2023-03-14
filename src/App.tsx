import Routes from "./Routes/Routes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Main } from "./components/UI";

import { GlobalStyle } from "./components/GlobalStyle";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from "./Context/AuthContext";
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <GlobalStyle/>
        <Header/>
        <Main>
          <Routes/>
        </Main>
        <Footer/>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
