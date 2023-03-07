import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Profile from "./Pages/Profile";
import LoginPage from "./components/LoginPage/loginPage";
import Routes from "./Routes";
import { GlobalStyle } from "./components/GlobalStyle";
import MultiSteps from "./components/Multi Steps/MultiSteps";
import { ShippingBox } from "./components/Shipping-Checkbox/shipping";

function App() {
  return (
    <div className="App">
<MultiSteps/>
      {/* <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter> */}

    </div>

  );
}

export default App;
