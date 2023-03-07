import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Profile from "./Pages/Profile";
import LoginPage from "./components/LoginPage/loginPage";
import Routes from "./Routes";
import { GlobalStyle } from "./components/GlobalStyle";

import MultiSteps from "./components/Multi Steps/MultiSteps";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Main } from "./components/UI";



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
