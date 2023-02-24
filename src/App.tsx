import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routes from "./Routes";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
