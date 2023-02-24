import Footer from "./components/Footer";
import Header from "./components/Header";
import Admin from "./Pages/Admin";
import Profile from "./Pages/Profile";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
