import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Main } from "./components/UI";

import { GlobalStyle } from "./components/GlobalStyle";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Main>
          <Routes />
        </Main>
        <Footer />
      </BrowserRouter> 
  );
}

export default App;
