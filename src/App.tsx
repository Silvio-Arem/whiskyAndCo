import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Profile from "./Pages/Profile";
import LoginPage from "./components/LoginPage/loginPage";
import Routes from "./Routes";
import { GlobalStyle } from "./components/GlobalStyle";

import MultiSteps from "./components/Multi Steps/MultiSteps";
<<<<<<< HEAD
import { ShippingBox } from "./components/Shipping-Checkbox/shipping";
=======

import 'bootstrap/dist/css/bootstrap.min.css';
import { Main } from "./components/UI";


>>>>>>> 5de551b4994c0a4fba784c883c567b0310332d26

function App() {
  return (
    <div className="App">
<MultiSteps/>
      {/* <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Main>
          <Routes />
        </Main>
        <Footer />
      </BrowserRouter> */}

    </div>

  );
}

export default App;
