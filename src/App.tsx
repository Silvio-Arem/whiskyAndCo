import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Profile from "./Pages/Profile";
import Routes from "./Routes";
import { GlobalStyle } from "./components/GlobalStyle";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>

    </div>

  );
}

export default App;
