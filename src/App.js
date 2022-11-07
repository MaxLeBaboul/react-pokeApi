import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/home/Home";
import PokemonPage from "./pages/pokemonPage/PokemonPage";
import Header from "./components/header/header";
import { store } from "./store/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/pokemon/:id" element={<PokemonPage />} />
          </Routes>
        </Container>
      </Router>
    </Provider>
  );
};

export default App;
