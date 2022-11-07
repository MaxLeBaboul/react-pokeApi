import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
// import { config } from "../../config/index";
import Pokemon from "../../components/pokemon/Pokemon";
import Loader from "../../components/loader/Loader";

const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPokemonList = async () => {
    let allPokemon = [];
    for (let i = 1; i <= 100; i++) {
      allPokemon.push(await getPokemonData(i));
    }
    console.log(allPokemon);
    setPokemon(allPokemon);
    setLoading(false);
  };

  const getPokemonData = async (id) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log(response);
    return response;
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Row>
          {pokemon.map((p, index) => (
            <Col key={index} xs={12} sm={12} md={4} lg={4} xl={4}>
              <Pokemon pokemon={p.data} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Home;
