import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Profile from "./Pages/Profile";
import Routes from "./Routes";
import { GlobalStyle } from "./components/GlobalStyle";



import { ShippingBox } from "./components/Shipping-Checkbox/shipping";


import 'bootstrap/dist/css/bootstrap.min.css';
import { Main } from "./components/UI";




function App() {
  return (
    <div className="App">

    <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Main>
          <Routes />
        </Main>
        <Footer />
      </BrowserRouter> 

    </div>

  );
}

export default App;
