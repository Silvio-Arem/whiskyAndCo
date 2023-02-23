import Footer from "./components/Footer";
import Header from "./components/Header";
import Admin from "./Pages/Admin";
import Profile from "./Pages/Profile";
import Routes from "./Routes";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
