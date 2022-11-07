import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Row, Col } from "react-bootstrap";
import Loader from "../../components/loader/Loader";
import { Link, useParams } from "react-router-dom";

const PokemonPage = () => {
  const { id } = useParams();
  console.log(id);
  const [pokemonDetails, setPokemonDetails] = useState();
  const [loading, setLoading] = useState(true);

  const getPokemon = async () => {
    const details = await getPokemonData(id);
    setPokemonDetails(details.data);
    setLoading(false);
  };

  const getPokemonData = async (id) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log(response);
    return response;
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <Card
                className="my-3 p-3 rounded text-center shadow mb-5 bg-white"
                style={{ border: "none" }}
              >
                <Link to={`/pokemon/${pokemonDetails.id}`}>
                  <Card.Img
                    style={{ width: "15rem" }}
                    src={pokemonDetails.sprites.front_default}
                    variant="top"
                  />
                </Link>
                <Card.Body
                  className={`${pokemonDetails.types[0].type.name} rounded text-white`}
                >
                  <Link
                    to={`/pokemon/${pokemonDetails.id}`}
                    className="link-name"
                  >
                    <Card.Title as="div">
                      <strong>
                        #{pokemonDetails.id}{" "}
                        {pokemonDetails.name.charAt(0).toUpperCase() +
                          pokemonDetails.name.slice(1)}
                      </strong>
                    </Card.Title>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="text-center">
            <Col>
              <Card.Img
                style={{ width: "15rem" }}
                src={pokemonDetails.sprites.front_default}
              />
              <Card.Text>Normal form</Card.Text>
            </Col>
            <Col>
              <Card.Img
                style={{ width: "15rem" }}
                src={pokemonDetails.sprites.front_shiny}
              />
              <Card.Text>Shiny form</Card.Text>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <div
                className="px-4 py-1 rounded text-center"
                style={{ border: "1px solid black" }}
              >
                Abilities
              </div>
            </Col>
          </Row>
          <Row className="text-center">
            {pokemonDetails.abilities.map((a) => (
              <Col key={a.ability.name} xs={6} sm={6} md={6} lg={6} xl={6}>
                <div className="rounded px-4 py-1">
                  {a.ability.name.toUpperCase()}
                </div>
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default PokemonPage;
