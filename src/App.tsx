import Routes from "./Routes/Routes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Main } from "./components/UI";

import { GlobalStyle } from "./components/GlobalStyle";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <AuthProvider>
        <GlobalStyle/>
        <Header/>
        <Main>
          <Routes/>
        </Main>
        <Footer/>
    </AuthProvider>
  );
}

export default App;
